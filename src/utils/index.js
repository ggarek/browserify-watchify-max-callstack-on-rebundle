function isNumber(a) {
  return {}.toString.call(a) === '[object Number]';
}

exports.is = {
  number: isNumber
};
