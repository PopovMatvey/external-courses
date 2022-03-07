function getSimpleTypeArgument(argumentValue) {
  if ((typeof argumentValue === 'number') && !(Number.isNaN(argumentValue))) {
    return 'number';
  }

  if (typeof argumentValue === 'string') {
    return 'string';
  }

  return undefined;
}

module.exports = getSimpleTypeArgument;
