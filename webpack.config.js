var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/main.js',
  out: 'public',
  clearBeforeBuild: true,
});
