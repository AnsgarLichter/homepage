import { getCurrentInstance, nextTick, onMounted } from "vue";

const useOnMounted = (fn: () => void, useNextTick = false) => {
    if (getCurrentInstance()) {
        onMounted(fn);
    } else if (useNextTick) {
        nextTick(fn);
    } else {
        fn();
    }
};

export { useOnMounted };