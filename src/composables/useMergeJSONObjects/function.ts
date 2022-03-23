/**
 * Merges two JSON objects.
 * The base object is used as the template.
 *
 * This means all properties from the base object are set.
 * If the object to be merged have the same properties (by name) these values will be set to the base object.
 *
 * @param {object} baseObject default JSON object which is usare used as a fallback
 * @param {object} objectToBeMerged options from binding
 *
 * @returns  {object} merged options
 */
const useMergeJsonObjects = (baseObject: object, objectToBeMerged: object) => {
  const mergedOptions = baseObject;

  for (const propertyName in mergedOptions) {
    if (objectToBeMerged && Object.prototype.hasOwnProperty.call(objectToBeMerged, propertyName)) {
      mergedOptions[propertyName as keyof object] = objectToBeMerged[propertyName as keyof object];
    }
  }

  return mergedOptions;
};

export { useMergeJsonObjects };
