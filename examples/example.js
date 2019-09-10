module.exports = function(req, res, next) {
  req.headers['originpath'] = 'rohitchora';
  next();
};
