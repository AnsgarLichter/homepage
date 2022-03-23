import { NavigationItem } from "./NavigationItem";

const NavigationItemCollection = class NavigationItemCollection {
  navigationItems: NavigationItem[];

  /**
   * Initlializes the scroll container.
   * Therefore it searches all html elements which represent the navigation items
   * and assigns it to an instance variable.
   * As soon as all items are assigned the items will be sorted ascending by offsetTop.
   *
   * The navigation items has to be a elements with a href set.
   *
   * @param {string} selectorForNavigationItems CSS selector for navigation items
   */
  constructor(selectorForNavigationItems: string) {
    this.navigationItems = [];

    const navigationElements = document.querySelectorAll(
      selectorForNavigationItems
    );

    navigationElements.forEach((navigationItem) => this.navigationItems.push(new NavigationItem(navigationItem)));

    this.navigationItems.sort((a: NavigationItem, b: NavigationItem) => {
      const aOffsetTop = a.getSection()?.offsetTop;
      const bOffsetTop = b.getSection()?.offsetTop;

      if (aOffsetTop > bOffsetTop) {
        return 1;
      } else if (aOffsetTop < bOffsetTop) {
        return -1;
      }

      return 0;
    });
  }

  /**
   * Returns all navigation items.
   *
   * @returns {array} navigation items
   */
  getNavigationItems() {
    return this.navigationItems;
  }

  /**
   * Adds a click event listener to all navigation items.
   *
   * @param {object} clickEventListener event handler for click event
   */
  addClickListener(clickEventListener: EventListenerOrEventListenerObject) {
    this.navigationItems.forEach((navigationItem) =>
      navigationItem.addClickListener(clickEventListener)
    );
  }

  /**
   * Returns the last navigation item determined by the 'offsetTop'.
   *
   * @returns {object} last navigation item (navigation item at the bottom)
   */
  getLastNavigationItem() {
    let lastNavigationItem = this.navigationItems[0];

    this.navigationItems.forEach((navigationItem) => {
      const section = navigationItem.getSection();
      if (section.offsetTop > lastNavigationItem?.getSection().offsetTop) {
        lastNavigationItem = navigationItem;
      }
    });

    return lastNavigationItem;
  }

  /**
   * Returns the navigation item at the given position.
   *
   * @param {number} position scroll position
   *
   * @returns {object} corresponding navigation item
   */
  getNavigationItemAtPosition(position: number) {
    let navigationItemAtPosition = null;

    this.navigationItems.forEach((navigationItem) => {
      if (navigationItem.getSection().offsetTop <= position) {
        navigationItemAtPosition = navigationItem;
      }
    });

    return navigationItemAtPosition;
  }

  /**
   * Returns the corresponding navigation item's instance.
   *
   * @param {object} htmlNavigationItem navigation item's html element
   *
   * @returns {object} navigation item's instance
   */
  get(htmlNavigationItem: HTMLElement) {
    return this.navigationItems.find(
      (navigationItem) => navigationItem.getNavigationItem() === htmlNavigationItem
    );
  }
};

export { NavigationItemCollection };
