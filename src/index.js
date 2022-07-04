module.exports = function towelSort (matrix = []) {
  return [...new Set([].concat(...matrix.map((subArray, index) => ((index % 2 === 1) ? subArray.reverse() : subArray), [])))];
};
