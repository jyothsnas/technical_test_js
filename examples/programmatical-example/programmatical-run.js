const nightwatch = require('nightwatch')

nightwatch.runner({
  _: [], // Run single feature file
  config: 'nightwatch.conf.js',
  env: 'default',
  filter: '',
  tag: ''
}, () => {
  console.log('done');
})