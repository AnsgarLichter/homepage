/**
 * Merges the default options and the bound options.
 * The default options are used as a fallback.
 * This means all properties from the default options are set.
 * If they are set in the bound options as well the value from the bound options will be used.
 *
 * @param {object} defaultOptions default options which are used as a fallback
 * @param {object} options bound options
 *
 * @returns  {object} merged options
 */
const mergeOptions = (defaultOptions, options) => {
  const mergedOptions = defaultOptions;

  for (const propertyName in mergedOptions) {
    if (options && Object.prototype.hasOwnProperty.call(options, propertyName)) {
      mergedOptions[propertyName] = options[propertyName];
    }
  }

  return mergedOptions;
};

export { mergeOptions };
