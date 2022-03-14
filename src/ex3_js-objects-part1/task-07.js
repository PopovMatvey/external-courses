function isObject(object) {
  return (typeof object === 'object');
}

function getDeepClone(object) {
  const isArray = Array.isArray(object);
  const cloneObject = isArray ? [] : {};

  for (const key in object) { // eslint-disable-line
    cloneObject[key] = isObject(object[key]) ? getDeepClone(object[key]) : object[key];
  }

  return cloneObject;
}

module.exports = getDeepClone;
