import { NavigationLink } from "./NavigationLink";

const NavigationLinkCollection = class NavigationLinkCollection {
  constructor(selectorForNavigationLinks) {
    this.navigationLinks = [];
    const navigationLinks = document.querySelectorAll(
      selectorForNavigationLinks
    );

    navigationLinks.forEach((navigationLink) => {
      this.navigationLinks.push(new NavigationLink(navigationLink));
    });
  }

  getNavigationLinks() {
    return this.navigationLinks;
  }

  addClickListener(clickEventListener) {
    this.navigationLinks.forEach((navigationLink) =>
      navigationLink.addClickListener(clickEventListener)
    );
  }

  getLastNavigationLink() {
    let lastSection = this.navigationLinks[0];

    this.navigationLinks.forEach((navigationLink) => {
      const section = navigationLink.getSection();
      if (section.offsetTop > lastSection?.getSection().offsetTop)
        lastSection = navigationLink;
    });

    return lastSection;
  }

  getNavigationLinkAtPosition(position) {
    let sectionAtPosition = null;

    this.navigationLinks.forEach((section) => {
      if (section.getSection().offsetTop <= position) {
        sectionAtPosition = section;
      }
    });

    return sectionAtPosition;
  }

  get(htmlNavigationLink) {
    return this.navigationLinks.find(
      (navigationLink) => navigationLink.navigationLink === htmlNavigationLink
    );
  }
};

export { NavigationLinkCollection };
