import type { App, ObjectDirective } from "vue";

/**
 * Updates visibility of htmlElement
 *
 * @param element
 * @param value
 */
function setVisibility(element: HTMLElement, value: boolean) {
    element.style.visibility = value ? 'visible' : 'hidden';
}

/**
 * Visible directive which does the same as the official v-if directive.
 * The one difference is that this directive uses the CSS property visible 
 * instead of the CSS property display to trigger the element's visibility.
 * 
 * The advantage is that the space for the HTML element is reserved in the rendered DOM.
 */
export const visibleDirective: ObjectDirective<HTMLElement> = {
    beforeMount(element: HTMLElement, { value }, { transition }) {
        if (transition && value) {
            transition.beforeEnter(element);
        } else {
            setVisibility(element, value);
        }
    },

    mounted(element: HTMLElement, { value }, { transition }) {
        if (transition && value) {
            transition.enter(element);
        }
    },

    updated(element: HTMLElement, { value, oldValue }, { transition }) {
        if (!value === !oldValue) {
            return;
        }

        if (transition) {
            if (value) {
                transition.beforeEnter(element);
                setVisibility(element, true);
                transition.enter(element);
            } else {
                transition.leave(element, () => {
                    setVisibility(element, false);
                });
            }
        } else {
            setVisibility(element, value);
        }
    },

    beforeUnmount(element: HTMLElement, { value }) {
        setVisibility(element, value);
    }
};


/**
 * Binds the visible directive to the app.
 *
 * @param app
 */
export function useVisible(app: App<Element>) {
    app.directive("visible", visibleDirective);
}
