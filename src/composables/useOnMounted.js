import { getCurrentInstance, nextTick, onMounted } from "vue";

const useOnMounted = (fn, useNextTick) => {
    if (getCurrentInstance()) {
        onMounted(fn);
    } else if (useNextTick) {
        nextTick(fn);
    } else {
        fn();
    }
};

export { useOnMounted };