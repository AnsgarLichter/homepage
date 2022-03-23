export class NavigationItem {
  htmlElement: Element;
  clickEventListener!: EventListenerOrEventListenerObject | null;

  /**
   * Initializes the naviagtion item.
   *
   * @param {object} navigationItemHtmlElement html element navigation item
   */
  constructor(navigationItemHtmlElement: Element) {
    this.htmlElement = navigationItemHtmlElement;
  }

  /**
   * Adds click event listener to the navigation item's html element.
   *
   * @param {object} clickEventListener event handler for click event
   */
  addClickListener(clickEventListener: EventListenerOrEventListenerObject) {
    this.htmlElement.addEventListener("click", clickEventListener);
    this.clickEventListener = clickEventListener;
  }

  /**
   * Removes the click event listener which has been added previously.
   */
  removeClickListener() {
    if (this.clickEventListener) {
      this.htmlElement.removeEventListener("click", this.clickEventListener);
      this.clickEventListener = null;
    }
  }

  /**
   * Returns navigation item's html element.
   *
   * @returns {object} html Element of navigation item
   */
  getNavigationItem() {
    return this.htmlElement;
  }

  /**
   * Returns the section which matches the navigation item.
   *
   * @returns {object} matching section of the navigation item
   */
  getSection() {
    const href = this.htmlElement.getAttribute("href") as string;

    return document.querySelector(href) as HTMLElement;
  }

  /**
   * Returns the class list of the navigation item's html element.
   *
   * @returns {object} class list
   */
  getClassList() {
    return this.htmlElement.classList;
  }

  /**
   * Adds the class to the navigation item's class list.
   *
   * @param {string} className CSS class name
   */
  addClass(className: string) {
    const classList = this.getClassList();

    classList.add(className);
  }

  /**
   * Removes the class from the navigation item's class list.
   *
   * @param {string} className CSS class name
   */
  removeClass(className: string) {
    const classList = this.getClassList();

    classList.remove(className);
  }

  /**
   * Returns whether the given class is set to the html element of the navigation item.
   *
   * @param {string} className CSS class name
   *
   * @returns {boolean} Whether class is set or not
   */
  hasClass(className: string) {
    const classList = this.getClassList();

    return classList.contains(className);
  }
}
