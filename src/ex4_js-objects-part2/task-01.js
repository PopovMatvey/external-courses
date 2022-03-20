function getValueProtoPropery(property, object) {
  const protoObject = Object.getPrototypeOf(object);

  if (protoObject.hasOwnProperty(property)) {
    return protoObject[property];
  }

  return undefined;
}

module.exports = getValueProtoPropery;
