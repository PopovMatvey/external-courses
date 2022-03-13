function getCopyObject(object) {
  const RETURNED_OBJECT = {};

  Object.assign(RETURNED_OBJECT, object);

  return RETURNED_OBJECT;
}

module.exports = getCopyObject;
