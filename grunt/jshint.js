// "nocomma": currently broken, https://github.com/jshint/jshint/issues/2044
// "strict": Currently still needed for ES6 modules, https://github.com/jshint/jshint/issues/1636

var task = {
  'server': {
    options: { jshintrc: true },
    src: [
      'Gruntfile.js', 'controllers/**/*.js', 'grunt/**/*.js',
      'models/**/*.js', 'models/**/*.js', 'routes/**/*.js',
      'settings/**/*.js'
    ]
  },
  'client': {
    options: { jshintrc: true },
    src: ['public/**/*.js']
  },
  'tests': {
    options: { jshintrc: true},
    src: ['test/**/*.js']
  }
};

module.exports = task;
