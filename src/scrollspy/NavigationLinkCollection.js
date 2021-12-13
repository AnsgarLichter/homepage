import { NavigationLink } from "./NavigationLink";

const NavigationLinkCollection = class NavigationLinkCollection {
    constructor(selectorForNavigationLinks) {
        this.navigationLinks = [];
        const navigationLinks = document.querySelectorAll(selectorForNavigationLinks);

        navigationLinks.forEach(navigationLink => {
            this.navigationLinks.push(new NavigationLink(navigationLink));
        });
    }

    getNavigationLinks() {
        return this.navigationLinks;
    }

    addClickListener(clickEventListener) {
        this.navigationLinks.forEach(
            navigationLink => navigationLink.addClickListener(clickEventListener));
    }

    getSections() {
        const sections = [];

        this.navigationLinks.forEach(navigationLink => sections.push(navigationLink.getSection()));

        return sections;
    }

    get(htmlNavigationLink) {
        return this.navigationLinks.find(navigationLink => navigationLink.navigationLink === htmlNavigationLink);
    }
}

export { NavigationLinkCollection }