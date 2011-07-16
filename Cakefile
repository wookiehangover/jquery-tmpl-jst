fs     = require 'fs'
util   = require 'util'
$      = require './lib/jquery.tmpl.js'

templatesDir = 'example/templates'
targetDir    = 'example'

task 'watch', 'Watch prod source files and build changes', ->
  invoke 'build'
  util.log "Watching for changes in #{templatesDir}"
  templates = fs.readdirSync(templatesDir)

  for file in templates then do (file) ->
    fs.watchFile "#{templatesDir}/#{file}", (curr, prev) ->
      if +curr.mtime isnt +prev.mtime
        util.log "Saw change in #{templatesDir}/#{file}"

task 'build', 'Pre compile jQuery Templates', ->
  templates = fs.readdirSync(templatesDir)
  remaining = templates.length
  data = []

  for tmpl, index in templates then do (tmpl, index) ->
    # read in each template
    fs.readFile "#{templatesDir}/#{tmpl}" , 'utf8', (err, fileContents) ->
      handleError(err) if err
      nm = tmpl.split('.')[0]

      sub_tmpl = /\/\*\s?(\w+)\s?\*\//
      subs = $.trim( fileContents ).split( sub_tmpl )

      if subs.length > 1 and subs.length % 2
        data[index] = ""

        for s in [0..subs.length] by 2
          name = if subs[s-1]? then "#{nm}_#{subs[s-1]}" else nm
          data[index] += build( name, subs[s] )

      else
        data[index] = build(nm, fileContents)

      process( data ) if --remaining is 0

  build = ( nm, fileContents )->
      # build JST function
      util.log "Building #{nm}"
      [
        "JST.templates.#{nm} = #{$.template( nm, fileContents)}; "
        "JST.#{nm} = function #{nm}(d){ return $.tmpl( JST.templates.#{nm}, d ); }; "
      ].join('')

  process = ( data )->
    fileData = "(function($){ var JST = { templates: {} }; #{ data.join('\n\n') } window.JST = JST; })(jQuery);"

    fs.writeFile  "#{targetDir}/templates.js", fileData, 'utf8', (err) ->
      handleError(err) if err
      util.log "#{targetDir}/templates.js written"

task 'build:dev', 'adds common js module support to jquery-tmpl', ->
  files = ["lib/head.js", "vendor/jquery-tmpl/jquery.tmpl.js"]
  data = []

  for file, index in files then do (file, index)->

    fs.readFile file, 'utf8', (err, fileContents) ->
      handleError(err) if err
      data[index] = fileContents

      process( data.join('') ) if index is files.length - 1

  process = ( data ) ->
    fs.writeFile "lib/jquery.tmpl.js", data, 'utf8', (err) ->
      handleError(err) if err
      util.log "lib/jquery.tmpl.js written"


handleError = (error) -> 
    util.log error
    displayNotification error




