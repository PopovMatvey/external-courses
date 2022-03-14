function getObjectWithDetermProperty(string, object) {
  if (object.hasOwnProperty(string)) {
    return object;
  }

  object[string] = 'new'; // eslint-disable-line no-param-reassign

  return object;
}

module.exports = getObjectWithDetermProperty;
