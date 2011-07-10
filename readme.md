# jquery-tmpl-jst

A cakefile that pre-compiles jQuery Templates into a single file.

Run `npm install` to install all necessary dependencies.

Modify the Cakefile's `targetDir` and `templateDir` variables to point
to you desired build location and the location of your templates,
respectively.

Run `cake build` or `cake watch` from the root of your project to
generate the compiled templates. `cake watch` will listen for changes in
your templates directory and run the build process on demand.

The file generated creates a `window.JST` object and depends on jQuery and
jquery.tmpl. Each file in your templates directory has been transformed
into a function attached to `window.JST.{you_filename}`.

## Usage

For convenience, the precompiled function takes the form of

      window.JST.FILE_NAME = function( data ){
        return $.tmpl( $.template( YOUR_TEMPLATE ), data );
      }

And it's final usage would look something like this:

      var data = { title: "foobar" },
          compiled_template = window.JST.example( my_data );

      $('body').html( compiled_template );

## jquery-tmpl as a Node Module

jquery-tmpl is now included as a submodule. In order to execute
templates in Node, I needed to add common js module support to
jquery-tmpl. This step is now included as a build step in the Cakefile,
and outputs to `lib/jquery.tmpl.js`.

## Contributing

This is a need-based project, so I only wrote it to account for my
needs as of right now.

If you've got any suggestestions, opinions, optimizations or fixes,
please fork and pull request to contribute.

Everything original is MIT, everything else honors whatever license it
was written under.
