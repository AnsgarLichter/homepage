const mergeOptions = (defaultOptions, options) => {
  return {
    navigationLinkSelector:
      options?.navigationLinkSelector || defaultOptions.navigationLinkSelector,
    scrollContainerSelector:
      options?.scrollContainerSelector ||
      defaultOptions.scrollContainerSelector,
    activeClass: options?.activeClass || defaultOptions.activeClass,
  };
};

export { mergeOptions };
