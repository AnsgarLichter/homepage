import { App, ObjectDirective, DirectiveBinding } from 'vue';

import { NavigationItemCollection } from "./NavigationItemCollection";
import { NavigationItem } from "./NavigationItem";
import { ScrollContainer } from "./ScrollContainer";

import { useMergeJsonObjects } from "@/composables";

export interface ScrollSpyOptions {
     /**
     * The selector which is used to identify the navigation items.
     */
    navigationItemSelector: string,

    /**
     * The selector string which is used to identify the scroll container you would like to use.
     * The window object is used as the default container if no corresponding element is found.
     */
    scrollContainerSelector: string,

    /**
     * The active class which will be applied to the active navigation item
     */
    activeClass: string,

    /**
     * If set to true the active navigation item and section will be determined
     * once all elements are mounted.
     * Otherwise the active navigation item will be determined as soon as the user starts scrolling.
     */
    defaultActive: boolean,

    /**
     * If set to true an event listener will be registered to the navigation items which scrolls the
     * corresponding section inte the view.
     */
    clickNavigationItemToScrollIntoSection: boolean,

    /**
     * If set to true the scroll container will scroll down to the section in the URL when the
     * component is mounted.
     */
    scrollOnStart: boolean,

    /**
     * Scroll behavior which is set when the selected navigation item is scrolled in the view.
     */
    scrollBehavior: ScrollBehavior
}

/**
 * The default options which are used if no other options are provided in the binding.
 */
const defaultOptions = {
    navigationItemSelector: ".navbar-item > a",
    scrollContainerSelector: ".content",
    activeClass: "active",
    defaultActive: true,
    clickNavigationItemToScrollIntoSection: true,
    scrollOnStart: true,
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
const spyDirective: ObjectDirective<HTMLElement, ScrollSpyOptions> = {
    /**
     * Executed as soon as the object is created.
     *
     * @param {object} element element
     * @param {object} binding binding
     */
    created(element: HTMLElement, binding: DirectiveBinding) {
        const boundOptions = binding.value;

        binding.value = useMergeJsonObjects(defaultOptions, boundOptions);
    },

    /**
     * Executed as soon as the scroll spy is mounted.
     *
     * @param {object} element element
     * @param {object} binding binding
     */
    mounted(element: HTMLElement, binding: DirectiveBinding) {
        const instance = binding.instance;
        const options = binding.value;

        const scrollContainer = new ScrollContainer(binding.value.scrollContainerSelector);
        const navigationItemCollection = new NavigationItemCollection(options.navigationItemSelector);

        const onContainerScrolled = () => {
            const activeClass = options.activeClass;

            const navigationItems = navigationItemCollection.getNavigationItems();
            navigationItems.forEach((navigationItem: NavigationItem) => {
                if (navigationItem.hasClass(activeClass)) {
                    navigationItem.removeClass(activeClass);
                }
            });

            let selectedNavigationItem: NavigationItem | null = navigationItemCollection.getNavigationItemAtPosition(
                scrollContainer.getScrollPosition()
            );
            if (scrollContainer.hasReachedEnd()) {
                selectedNavigationItem = navigationItemCollection.getLastNavigationItem();
            }

            selectedNavigationItem?.addClass(activeClass);
        };

        scrollContainer.addScrollListener(onContainerScrolled);

        const onNavigationItemClicked = (event: Event) => {
            event.preventDefault();

            const target: HTMLElement = event.target as HTMLElement;
            const navigationItem = navigationItemCollection.get(target);
            const targetSection = navigationItem?.getSection();

            targetSection?.scrollIntoView({behavior: options.scrollBehavior});
        };

        if (options.clickNavigationItemToScrollIntoSection) {
            navigationItemCollection.addClickListener(onNavigationItemClicked);
        }

        if (options.defaultActive) {
            instance?.$nextTick(onContainerScrolled);
        }

        const scrollToHashElement = () => {
            const { hash } = window.location;

            if (!hash) {
                return;
            }

            const idFromHash = decodeURI(hash.substring(1));
            const hashElement = document.getElementById(idFromHash);

            if (!hashElement) {
                return;
            }

            hashElement.scrollIntoView({
                behavior: options.scrollBehavior
            });
        };

        if (options.scrollOnStart) {
            scrollToHashElement();
        }
    }
};

/**
 * Binds the scroll spy directive to the app.
 *
 * @param {App} app vue app instance
 */
export function createScrollSpy (app: App) {
    app.directive("spy", spyDirective);
}
