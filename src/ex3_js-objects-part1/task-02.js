function getPairKeyValue(object) {
  const processedObject = Object.entries(object);

  processedObject.forEach((value) => {
    console.log(value);
  });

  return undefined;
}

module.exports = getPairKeyValue;
