import { App, ObjectDirective } from "vue";

/**
 * Updates visibility of htmlElement
 *
 * @param element
 * @param value
 */
function setVisibility(element: HTMLElement, value: boolean) {
    element.style.visibility = value ? 'visible' : 'hidden';
}

const visibleDirective: ObjectDirective<HTMLElement> = {
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
