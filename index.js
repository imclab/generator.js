
/**
 * Example:
 *
 *    tower create component my-component
 */

exports.create = function(recipe, args, done){
  var strcase = require('tower-strcase');
  var now = new Date();
  var projectName = args[4];

  var options = require('commander')
    .option('-o, --output-directory [value]', 'Output directory', process.cwd())
    .option('-n, --namespace [value]', 'Namespace for component (e.g. GitHub organization')
    .parse(args);
  
  recipe.outputDirectory(options.outputDirectory);

  recipe
    .set('projectName', projectName)
    .set('namespace', options.namespace)
    .set('date', { year: now.getFullYear() })
    .set('strcase', strcase)
    .set('componentName', options.namespace ? [options.namespace, projectName].join('/') : projectName)
    .set('pkg', options.package);

  // ws
  console.log('');

  recipe.directory(projectName, function(){
    recipe.template('Readme.md');
    recipe.template('component.json');
    recipe.template('package.json');
    recipe.template('.gitignore', 'gitignore');
    recipe.template('index.js');
    recipe.template('index.json');
    recipe.template('index.html');
  });
  
  // ws
  console.log('');

  done();
};