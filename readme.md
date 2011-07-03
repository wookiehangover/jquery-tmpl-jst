# jquery-tmpl-jst

A cakefile that pre-compiles jQuery Templates into a single file.

Run `npm install` to install all necessary dependencies.

Modify the Cakefile's `targetDir` and `templateDir` variables to point
to you desired build location and the location of your templates,
respectively.

Run `cake build` or `cake watch` from the root of your project to
generate the compiled templates. `cake watch` will listen for changes in
your templates directory and run the build process on demand.
