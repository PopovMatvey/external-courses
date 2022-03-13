function getObjectWithDetermProperty(string, object) {
  const OBJECT_KEYS = Object.keys(object);
  let checkProperty = false;

  OBJECT_KEYS.forEach((value) => {
    if (value === string) {
      checkProperty = true;
    }
  });

  if (checkProperty) {
    return object;
  }

  object[string] = 'new'; // eslint-disable-line no-param-reassign

  return object;
}

module.exports = getObjectWithDetermProperty;
