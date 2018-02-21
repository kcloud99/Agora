  File structure should include a place for the back end, could just be a folder called server or database<br>
   - should include a file that uses express and does routing
   - should include a file that handles the database management (the model)

  A folder for the front end, possibly called app, client, src
   - an index.html which loads the transpiled .js file in a script /script tag
   - the .jsx files in another folder, which are being transpiled in real time by webpack/babel
   - later on, a .css file


   .gitignore should ignore the .jsx files and node_modules (it already ignores node_modules)


   package.json should include dependencies
   mongoose (mongodb needs to be globally installed on the host machine I believe, so not included in the package.json, not sure)
   express
   body-parser
   react
   reactDOM
   jquery possibly

   as Dev dependencies
   babel-core
   babel-loader
   babel-preset-es2015
   babel-preset-react