function getPairKeyValue(object) {
  const PROCESSED_OBJECT = Object.entries(object);

  PROCESSED_OBJECT.forEach((value) => {
    console.log(value);
  });

  return '';
}

module.exports = getPairKeyValue;
