import { useEventListener } from '@/composables';
import type { App, DirectiveBinding, ObjectDirective } from 'vue';


export interface ScrollSpyOptions {
    /**
    * CSS selector to identify the navigation items.
    * 
    * @default ".navbar-item > a"
    */
    navigationItemSelector?: string,

    /**
     * CSS selector to tidentify the scroll container to be listened to.
     * If there is no suitable element found the window object will be used as a fallback.
     * 
     * @default ".content"
     */
    scrollContainerSelector?: string,

    /**
     * CSS class applied to the active navigation item.
     * 
     * @default active
     */
    activeClass?: string,

    /**
     * If set to true the active navigation item and section will be determined
     * once all elements are mounted.
     * Otherwise the active navigation item will be determined as soon as the 
     * user starts scrolling.
     * 
     * @default true
     */
    defaultActive?: boolean,

    /**
     * If set to true an event listener will be registered to the navigation items
     * which scrolls the corresponding section into the view.
     * 
     * @default true
     */
    clickNavigationItemToScrollIntoSection?: boolean,

    /**
     * If set to true the scroll container will scroll down to the section mentioned in the URL when the
     * component is mounted.
     * 
     * @default true
     */
    scrollOnStart?: boolean,

    /**
     * Scroll behavior which is set when the selected navigation item is scrolled in the view.
     * 
     * @default smooth
     */
    scrollBehavior?: ScrollBehavior
}

/**
 * CSS prefix for class selector 
 */
const cssClassSelector = '.'
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
export const spyDirective: ObjectDirective<HTMLElement, ScrollSpyOptions> = {
    /**
     * Executed as soon as the scroll spy is mounted.
     *
     * @param {object} element element
     * @param {object} binding binding
     */
    mounted(element: HTMLElement, binding: DirectiveBinding) {
        const test = 'test';
        const {
            navigationItemSelector = ".navbar-item > a",
            scrollContainerSelector = ".content",
            activeClass = "active",
            defaultActive = true,
            clickNavigationItemToScrollIntoSection = true,
            scrollOnStart = true,
            scrollBehavior = "smooth"
        } = binding.value || {};

        const scrollContainer: HTMLElement = scrollContainerSelector ? window.document.querySelector(scrollContainerSelector) : document.documentElement;
        const navigationItems: HTMLAnchorElement[] = Array.from(window.document.querySelectorAll(navigationItemSelector));
        if (!scrollContainer || !navigationItems?.length) {
            console.warn("The scroll container and navigation items have to be defined!");
            return;
        }

        const sectionsSelectors = navigationItems.map(item => item.hash).join(', ');
        const navigationSections: HTMLElement[] = Array.from(window.document.querySelectorAll(sectionsSelectors));
        if (!navigationSections?.length) {
            console.warn("There were no corresponding sections found for the navigation items!");
            return;
        }

        navigationSections.sort((a, b) => b.offsetTop - a.offsetTop);

        function onContainerScrolled() {
            document.querySelectorAll(cssClassSelector + activeClass).forEach(item => item.classList.remove(activeClass));

            const sectionInView = navigationSections.find(section => section.offsetTop <= scrollContainer.scrollTop);
            const navigationItemInView = navigationItems.find(item => item.hash.replace('#', '') === sectionInView?.id);
            navigationItemInView?.classList.add(activeClass);
        }

        useEventListener('scroll', scrollContainer, onContainerScrolled, { passive: true });

        function onNavigationItemClicked(event: Event) {
            const target = event.target as HTMLAnchorElement;
            const targetSection = navigationSections.find(section => section.id === target.hash.replace('#', ''));
            targetSection?.scrollIntoView({ behavior: scrollBehavior });
        }

        if (clickNavigationItemToScrollIntoSection)
            navigationItems.forEach(item => useEventListener('click', item, onNavigationItemClicked, { passive: true }));

        if (defaultActive)
            binding.instance?.$nextTick(onContainerScrolled);

        function scrollToHashElement() {
            const { hash } = window.location;
            const id = hash.replace('#', '');
            const section = navigationSections.find(item => item.id === id);

            section?.scrollIntoView({ behavior: scrollBehavior });
        }

        if (scrollOnStart)
            scrollToHashElement();
    }
}

/**
 * Binds the scroll spy directive to the app.
 *
 * @param {App} app vue app instance
 */
export function useScrollSpy(app: App) {
    app.directive("scroll-spy", spyDirective);
}
