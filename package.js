Package.describe({
  summary: " Latest version of X-Editable wrapped for meteor",
  version: "1.5.1",
  git: "https://github.com/arillo/meteor-x-editable.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.use('jquery');

  //x-editable
  api.add_files('lib/jquery-editable/img/clear.png', 'client');
  api.add_files('lib/jquery-editable/img/loading.gif', 'client');

  api.add_files('lib/inputs-ext/wysihtml5/wysihtml5.js', 'client');
  // address
  api.add_files('lib/inputs-ext/address/address.css', 'client');
  api.add_files('lib/inputs-ext/address/address.js', 'client', {bare:true});

  // poshytip
  // api.add_files('lib/jquery-editable/js/jquery-editable-poshytip.js', 'client');

  //override image paths
  api.add_files('path-override.css', 'client');  

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('arillo:meteor-x-editable');
  api.addFiles('arillo:meteor-x-editable-tests.js');
});


Package.describe({
	summary: "Latest version of X-Editable wrapped for meteor",
	name: "meteor-x-editable"
});