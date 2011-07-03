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
      # build JST function
      tmp = [
        "JST.#{nm} = function(d){ var t ="
        $.template(null, fileContents)
        ";return $.tmpl(t,d);};"
      ]

      data[index] = tmp.join('')
      process( data ) if --remaining is 0

  process = ( data )->
    fileData = "(function($){ var JST = {}; #{ data.join('\n\n') } window.JST = JST; })(jQuery);"

    fs.writeFile  "#{targetDir}/templates.js", fileData, 'utf8', (err) ->
      handleError(err) if err
      util.log "#{targetDir}/templates.js written"

handleError = (error) -> 
    util.log error
    displayNotification error

