/**
 * Updates visibility of htmlElement
 *
 * @param {object} element htmlElement
 * @param {boolean} value value to be applied to visibility of the element
 */
const setVisibility = (element, value) =>  {
    element.style.visibility = value ? 'visible' : 'hidden';
};

const visibleDirective = {
    beforeMount(element, { value }, { transition }) {
        if (transition && value) {
            transition.beforeEnter(element);
        } else {
            setVisibility(element, value);
        }
    },

    mounted(element, { value }, { transition }) {
        if (transition && value) {
           transition.enter(element);
        }
    },

    updated(element, { value, oldValue }, { transition }) {
        if (value === oldValue) {
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

    beforeUnmount(element, { value }) {
        setVisibility(element, value);
    }
};


/**
 * Binds the visible directive to the app.
 *
 * @param {object} app vue app instance
 */
 const useVisible = (app) => {
    app.directive("visible", visibleDirective);
};

export { useVisible };
