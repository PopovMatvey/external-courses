function checkONProperty(string, object) {
  const OBJECT_KEYS = Object.keys(object);
  let checkProperty = false;

  OBJECT_KEYS.forEach((value) => {
    if (value === string) {
      checkProperty = true;
    }
  });

  if (checkProperty) {
    return true;
  }

  return false;
}

module.exports = checkONProperty;
