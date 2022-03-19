function getValueProtoPropery(property, object) {
  const protoObject = Object.getPrototypeOf(object);
  const protoPairKeyValue = Object.entries(protoObject);
    let returnedValue = undefined; // eslint-disable-line 

  protoPairKeyValue.forEach((value) => {
    if (value[0] === property) {
      returnedValue = value[1];
    }
  });

  return returnedValue;
}

module.exports = getValueProtoPropery;
