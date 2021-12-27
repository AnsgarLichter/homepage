import { NavigationLinkCollection } from "./NavigationLinkCollection";
import { ScrollContainer } from "./ScrollContainer";

import { mergeOptions } from "./util/MergeOptions";

//Options: NavigationLinksSelector, ScrollContainerSelector, ActiveClass
const defaultOptions = {
    navigationLinkSelector: ".navbar-item > a",
    scrollContainerSelector: ".content",
    activeClass: "active"
};

const spyDirective = {
    //eslint-disable-next-line no-undef
    created(element, binding) {
        const instance = binding.instance;
        const providedOptions = binding.value;

        instance.options = mergeOptions(providedOptions, defaultOptions);
    },

    //eslint-disable-next-line no-undef
    mounted(element, binding) {
        const instance = binding.instance;
        const methods = binding.dir.methods;

        instance.scrollContainer = new ScrollContainer(instance.options.scrollContainerSelector);
        instance.navigationLinkCollection = new NavigationLinkCollection(instance.options.navigationLinkSelector);

        instance.scrollContainer.addScrollListener(methods.onContainerScrolled.bind(instance));
        instance.navigationLinkCollection.addClickListener(methods.onNavigationLinkClicked.bind(instance));

        instance.$nextTick(methods.onContainerScrolled.bind(instance).call());
    },

    methods: {
        onContainerScrolled() {
            const scrollPosition = this.scrollContainer.getScrollPosition();
            const activeClass = this.options.activeClass;

            const navigationLinks = this.navigationLinkCollection.getNavigationLinks();
            navigationLinks.forEach(navigationLink => {
                if (navigationLink.hasClass(activeClass))
                    navigationLink.removeClass(activeClass)
            });

            let selectedNavigationLink = this.navigationLinkCollection.getNavigationLinkAtPosition(scrollPosition);
            if (this.scrollContainer.hasReachedEnd())
                selectedNavigationLink = this.navigationLinkCollection.getLastNavigationLink();

            selectedNavigationLink?.addClass(activeClass);
        },

        onNavigationLinkClicked(event) {
            const navigationLink = this.navigationLinkCollection.get(event.srcElement);
            const targetSection = navigationLink.getSection();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
};

const initializeScrollSpy = (app) => {
    app.directive("spy", spyDirective);
};

export { initializeScrollSpy };