function getObjectWithAmountChars(string) {
  const object = {};

  for (let i = 0; i < string.length; i++) {
    if (!object.hasOwnProperty(string[i])) {
      object[string[i]] = 0;
    }

    if (object.hasOwnProperty(string[i])) {
      object[string[i]] += 1;
    }
  }

  return object;
}

function countAmountChars(string) {
  const charsObject = getObjectWithAmountChars(string);
  const processedObject = Object.entries(charsObject);

  processedObject.forEach((value) => {
    console.log(value);
  });
}

module.exports = countAmountChars;
