function getValueProperty(object, propertyPath) {
  return propertyPath.split('.').reduce(
    (processedObject, objectIndex) => (
      (typeof processedObject === 'undefined' || processedObject === null) ? processedObject : processedObject[objectIndex]
    ), object,
  );
}

module.exports = getValueProperty;
