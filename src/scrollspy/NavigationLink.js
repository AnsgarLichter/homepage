const NavigationLink = class NavigationLink {
  constructor(navigationLink) {
    this.navigationLink = navigationLink;
  }

  addClickListener(clickEventListener) {
    this.clickEventListener = clickEventListener;
    this.navigationLink.addEventListener("click", clickEventListener);
  }

  removeClickListener() {
    this.navigationLink.removeEventListener("click", this.clickEventListener);
    this.clickEventListener = null;
  }

  getSection() {
    const href = this.navigationLink.getAttribute("href");

    return document.querySelector(href);
  }

  getClassList() {
    return this.navigationLink.classList;
  }

  addClass(className) {
    const classList = this.getClassList();

    classList.add(className);
  }

  removeClass(className) {
    const classList = this.getClassList();

    classList.remove(className);
  }

  hasClass(className) {
    const classList = this.getClassList();

    return classList.contains(className);
  }
};

export { NavigationLink };
