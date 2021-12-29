/**
 * Merges the default options and the bound options.
 * The default options are used as the template.
 * This means all properties from the default options are set.
 * If the options from the binding have the same properties these values will be set.
 *
 * @param {object} defaultOptions default options which are used as a fallback
 * @param {object} boundOptions options from binding
 *
 * @returns  {object} merged options
 */
const mergeOptions = (defaultOptions, boundOptions) => {
  const mergedOptions = defaultOptions;

  for (const propertyName in mergedOptions) {
    if (boundOptions && Object.prototype.hasOwnProperty.call(boundOptions, propertyName)) {
      mergedOptions[propertyName] = boundOptions[propertyName];
    }
  }

  return mergedOptions;
};

export { mergeOptions };
