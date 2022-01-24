import { NavigationItemCollection } from "./NavigationItemCollection";
import { ScrollContainer } from "./ScrollContainer";

import { useMergeJsonObjects } from "@/composables";

/**
 * The default options which are used if no other options are provided in the binding.
 */
const defaultOptions = {
    /**
     * The selector which is used to identify the navigation items.
     */
    navigationItemSelector: ".navbar-item > a",

    /**
     * The selector string which is used to identify the scroll container you would like to use.
     * The window object is used as the default container if no corresponding element is found.
     */
    scrollContainerSelector: ".content",

    /**
     * The active class which will be applied to the active navigation item
     */
    activeClass: "active",

    /**
     * If set to true the active navigation item and section will be determined
     * once all elements are mounted.
     * Otherwise the active navigation item will be determined as soon as the user starts scrolling.
     */
    defaultActive: true,

    /**
     * If set to true an event listener will be registered to the navigation items which scrolls the
     * corresponding section inte the view.
     */
    clickNavigationItemToScrollIntoSection: true,

    /**
     * If set to true the scroll container will scroll down to the section in the URL when the
     * component is mounted.
     */
    scrollOnStart: true,

    /**
     * Scroll behavior which is set when the selected navigation item is scrolled in the view.
     */
    scrollBehavior: "smooth"
};

/**
 * The scroll spy directive which updates the active navigation item after scrolling.
 *
 * The navigation items and the scroll container are determined through the given selectors
 * in the options.
 *
 * The corresponding sections to the navigatons items are determined by the attribute "href"
 * of the items (a elements). This means that there have to be sections with a matching id to
 * the href of the link.
 */
const spyDirective = {
    /**
     * Executed as soon as the object is created.
     *
     * @param {object} element element
     * @param {object} binding binding
     */
    created(element, binding) {
        const instance = binding.instance;
        const boundOptions = binding.value;

        instance.options = useMergeJsonObjects(defaultOptions, boundOptions);
    },

    /**
     * Executed as soon as the scroll spy is mounted.
     *
     * @param {object} element element
     * @param {object} binding binding
     */
    mounted(element, binding) {
        const instance = binding.instance;
        const methods = binding.dir.methods;

        instance.scrollContainer = new ScrollContainer(instance.options.scrollContainerSelector);
        instance.scrollContainer.addScrollListener(methods.onContainerScrolled.bind(instance));

        if (instance.options.clickNavigationItemToScrollIntoSection) {
            instance.navigationItemCollection =
                new NavigationItemCollection(instance.options.navigationItemSelector);
            instance.navigationItemCollection.
                addClickListener(methods.onNavigationItemClicked.bind(instance));
        }

        if (instance.options.defaultActive) { instance.$nextTick(methods.onContainerScrolled.bind(instance).call()); }

        if (instance.options.scrollOnStart) {
            methods.scrollToHashElement.bind(instance).call();
        }
    },

    methods: {
        /**
         * Updates the active navigation item when the user executs any scrolling.
         */
        onContainerScrolled() {
            const scrollPosition = this.scrollContainer.getScrollPosition();
            const activeClass = this.options.activeClass;

            const navigationItems =
                this.navigationItemCollection.getNavigationItems();
            navigationItems.forEach((navigationItem) => {
                if (navigationItem.hasClass(activeClass)) { navigationItem.removeClass(activeClass); }
            });

            let selectedNavigationItem =
                this.navigationItemCollection.getNavigationItemAtPosition(
                    scrollPosition
                );
            if (this.scrollContainer.hasReachedEnd()) {
                selectedNavigationItem =
                    this.navigationItemCollection.getLastNavigationItem();
            }

            selectedNavigationItem?.addClass(activeClass);
        },

        /**
         * Scrolls the corresponding section of the navigation item into the view if
         * a navigation item is clicked.
         *
         * @param {object} event click event's object
         */
        onNavigationItemClicked(event) {
            event.preventDefault();

            const navigationItem = this.navigationItemCollection.get(
                event.srcElement
            );
            const targetSection = navigationItem.getSection();

            targetSection.scrollIntoView({
                behavior: this.options.scrollBehavior
            });
        },

        /**
         * Scrolls the scroll container to the element passed as a hash in the URL.
         */
        scrollToHashElement() {
            const { hash } = window.location;

            if (!hash) { return; }

            const idFromHash = decodeURI(hash.substr(1));
            const hashElement = document.getElementById(idFromHash);

            if (!hashElement) { return; }

            hashElement.scrollIntoView({
                behavior: this.options.scrollBehavior
            });

        }
    }
};

/**
 * Binds the scroll spy directive to the app.
 *
 * @param {object} app vue app instance
 */
const initializeScrollSpy = (app) => {
    app.directive("spy", spyDirective);
};

export { initializeScrollSpy };
