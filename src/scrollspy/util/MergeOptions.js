const mergeOptions = (defaultOptions, options) => {
  return {
    navigationLinkSelector:
      options?.navigationLinkSelector || defaultOptions.navigationLinkSelector,
    scrollContainerSelector:
      options?.scrollContainerSelector ||
      defaultOptions.scrollContainerSelector,
    activeClass: options?.activeClass || defaultOptions.activeClass,
    defaultActive:
      options?.defaultActive || defaultOptions.defaultActive,
    clickNavigationLinkToScrollIntoSection:
      options?.clickNavigationLinkToScrollIntoSection ||
      defaultOptions.clickNavigationLinkToScrollIntoSection,
    scrollOnStart:
      options?.scrollOnStart || defaultOptions.scrollOnStart
  };
};

export { mergeOptions };
