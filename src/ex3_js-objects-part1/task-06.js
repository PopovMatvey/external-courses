function getPathsArray(object) {
  const pathsArray = [];

  function findPath(processedObject, string) {
    Object.keys(processedObject).forEach((key) => {
      if ((typeof processedObject[key]) === 'object') {
        pathsArray.push(string ? `${string}.${key}` : key);
        findPath(processedObject[key], string ? `${string}.${key}` : key);
      } else {
        pathsArray.push(string ? `${string}.${key}` : key);
      }
    });
  }

  findPath(object, '');

  return pathsArray;
}

function getValuesArray(object) {
  const valuesArray = [];

  function findPath(processedObject) {
    Object.keys(processedObject).forEach((value) => {
      if ((typeof processedObject[value]) === 'object') {
        valuesArray.push(processedObject[value]);
        findPath(processedObject[value]);
      } else {
        valuesArray.push(processedObject[value]);
      }
    });
  }

  findPath(object);

  return valuesArray;
}

function checkOnPath(pathArray, checkedString) {
  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i] === checkedString) {
      return true;
    }
  }

  return false;
}

function getIndexValue(pathArray, checkedString) {
  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i] === checkedString) {
      return i;
    }
  }

  return undefined;
}

function getValueByIndex(array, indexArray) {
  for (let i = 0; i < array.length; i++) {
    if (i === indexArray) {
      return array[i];
    }
  }

  return undefined;
}

function getProperty(object, propertyPath) {
  const PATHS_ARRAY = getPathsArray(object);
  const VALUES_ARRAY = getValuesArray(object);
  const INDEX_VALUE = getIndexValue(PATHS_ARRAY, propertyPath);

  if (checkOnPath(PATHS_ARRAY, propertyPath)) {
    return getValueByIndex(VALUES_ARRAY, INDEX_VALUE);
  }

  return undefined;
}

module.exports = getProperty;
