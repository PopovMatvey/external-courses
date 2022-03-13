function getDeepClone(object) {
  const OBJECT_KEYS = Object.keys(object);

  const functionsObject = {

    Object: () => {
      const cloneObject = {};

      OBJECT_KEYS.forEach((property) => {
        cloneObject[property] = getDeepClone(object[property]);
      });
      return cloneObject;
    },

    Array: () => object.map((i) => getDeepClone(i)),
  };

  if (object.constructor.name in functionsObject) {
    return functionsObject[object.constructor.name]();
  }

  return object;
}

module.exports = getDeepClone;
