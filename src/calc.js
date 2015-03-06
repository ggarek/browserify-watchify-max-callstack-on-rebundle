var is = require('utils').is;

exports.add = function calc_add(a,b) {
  var valid = is.number(a) && is.number(b);

  if(!valid) throw new Error('"calc_add(a: number, b: number): number" -> invalid arguments');
  return a + b;
};
