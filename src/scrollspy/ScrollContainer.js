export class ScrollContainer {
    constructor(selectorForScrollContainer) {
        this.scrollContainer = document.querySelector(selectorForScrollContainer) || window;
    }

    addScrollListener(scrollEventListener, options) {
        this.scrollContainer.addEventListener('scroll', scrollEventListener, options);

        if (!options?.once)
            this.scrollEventListener = scrollEventListener;
    }

    removeScrollListener() {
        this.scrollContainer.removeEventListener('scroll', this.scrollEventListener);
        this.scrollContainer = null;
    }

    addLoadListener(loadEventListener, options) {
        this.scrollContainer.addEventListener('load', loadEventListener, options);

        if (!options?.once)
            this.loadEventListener = loadEventListener;
    }

    removeLoadListener() {
        this.scrollContainer.removeEventListener('load', this.loadEventListener);
        this.loadEventListener = null;
    }

    getScrollPosition() {
        return this.scrollContainer.scrollTop;
    }

    hasReachedEnd() {
        return this.scrollContainer.scrollHeight - this.getScrollPosition() === this.scrollContainer.clientHeight;
    }
}