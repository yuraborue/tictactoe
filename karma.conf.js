'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : true,

	files: ['target/test/*.spec.js'],

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ]
  });
};
