module.exports = Object.values(require('os').networkInterfaces())
  .reduce((s, v) => s.concat(v), [])
  .find(e => e.family === 'IPv4' && !e.internal).address;
