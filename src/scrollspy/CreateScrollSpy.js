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
    created(element, binding) {
        console.log(element); //TODO: What to do with element?

        const instance = binding.instance;
        const providedOptions = binding.value;

        instance.options = mergeOptions(providedOptions, defaultOptions);
    },

    mounted(element, binding) {
        console.log(element); //TODO: What to do with element?

        const instance = binding.instance;
        const methods = binding.dir.methods;

        instance.scrollContainer = new ScrollContainer(instance.options.scrollContainerSelector);
        instance.scrollContainer.addScrollListener(methods.onContainerScrolled.bind(instance));

        instance.navigationLinkCollection = new NavigationLinkCollection(instance.options.navigationLinkSelector);
        instance.navigationLinkCollection.addClickListener(methods.onNavigationLinkClicked.bind(instance));

        instance.$nextTick(methods.onContainerScrolled.bind(instance).call());
    },

    methods: {
        onContainerScrolled() {
            const scrollPosition = this.scrollContainer.getScrollPosition();

            const selectorForActiveClass = "." + this.options.activeClass;
            const sections = this.navigationLinkCollection.getSections();

            sections.forEach(section => {
                if (section.offsetTop <= scrollPosition) {
                    const id = section.id;

                    const activeNavigationLink = document.querySelector(selectorForActiveClass);
                    if (activeNavigationLink)
                        activeNavigationLink.classList.remove(this.options.activeClass);

                    document.querySelector(`a[href*=${id}]`).parentNode.classList.add(this.options.activeClass);
                }
            });
        },

        onNavigationLinkClicked(event) {
            const navigationLink = this.navigationLinkCollection.get(event.srcElement); //TODO: Get instance for link
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