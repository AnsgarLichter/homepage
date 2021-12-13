const NavigationLink = class NavigationLink {
    constructor(navigationLink) {
        this.navigationLink = navigationLink;
    }

    addClickListener(clickEventListener) {
        this.clickEventListener = clickEventListener;
        this.navigationLink.addEventListener('click', clickEventListener);
    }

    removeClickListener() {
        this.navigationLink.removeEventListener('click', this.clickEventListener);
        this.clickEventListener = null;
    }

    getSection() {
        const href = this.navigationLink.getAttribute("href");

        return document.querySelector(href);
    }
}

export { NavigationLink }