/**
 * Scroll Container
 */
const ScrollContainer = class ScrollContainer {

    /**
     * Initlializes the scroll container.
     * Therefore it searches the html element which represents the scroll container
     * and assigns it to an instance variable.
     *
     * @param {string} selectorForScrollContainer CSS selector for scroll container
     */
    constructor(selectorForScrollContainer) {
        this.htmlElement =
            document.querySelector(selectorForScrollContainer) || window;
    }

    /**
     * Registers the given function as listener for the event "scroll".
     *
     * @param {object} scrollEventListener event listener function to be bound
     * @param {object} options options for event listener binding
     */
    addScrollListener(scrollEventListener, options) {
        this.htmlElement.addEventListener(
            "scroll",
            scrollEventListener,
            options
        );

        if (!options?.once) { this.scrollEventListener = scrollEventListener; }
    }

    /**
     * Removes the function as listener for the event "scroll" which has been bound previously.
     */
    removeScrollListener() {
        this.htmlElement.removeEventListener(
            "scroll",
            this.scrollEventListener
        );
        this.scrollEventListener = null;
    }

    /**
     * Registers the given function as listener for the event "load".
     *
     * @param {object} loadEventListener event listener function to be bound
     * @param {object} options options for event listener binding
     */
    addLoadListener(loadEventListener, options) {
        this.htmlElement.addEventListener("load", loadEventListener, options);

        if (!options?.once) { this.loadEventListener = loadEventListener; }
    }

    /**
     * Removes the function as listener for the event "load" which has been bound previously.
     */
    removeLoadListener() {
        this.htmlElement.removeEventListener("load", this.loadEventListener);

        this.loadEventListener = null;
    }

    /**
     * Returns the property "scrollTop" of the html element of the scroll container.
     *
     * @returns {number} current offset at the top of the scroll container
     */
    getScrollPosition() {
        return this.htmlElement.scrollTop;
    }

    /**
     * Returns the property "scrollHeight" of the html element of the scroll container.
     *
     * @returns {number} current scroll height
     */
    getScrollHeight() {
        return this.htmlElement.scrollHeight;
    }

    /**
     * Returns the property "clientHeight" of the html element of the scroll container.
     *
     * @returns {number} client height
     */
    getClientHeight() {
        return this.htmlElement.clientHeight;
    }

    /**
     * Returns the scroll container's html element.
     *
     * @returns {object} html element of the scroll container
     */
    getScrollContainer() {
        return this.htmlElement;
    }

    /**
     * Returns whether the scroll container has reached it's end.
     *
     * @returns {boolean} has reached end of the page?
     */
    hasReachedEnd() {
        return (
            this.getScrollHeight() - this.getScrollPosition() ===
            this.getClientHeight()
        );
    }
};

export { ScrollContainer };