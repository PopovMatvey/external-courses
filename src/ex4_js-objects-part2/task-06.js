function getStringWithUpperFirstChart(string) {
  return string.split(/\s+/).map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
}

module.exports = getStringWithUpperFirstChart;
