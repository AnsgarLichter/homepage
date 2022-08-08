import { getCurrentScope, isRef, onScopeDispose, watch } from "vue";
import type { Ref } from "vue";

function noop() { return; }
/**
 * Function to bind event listener and to remvoe it on scope dispose
 *
 * @param initialValue
 */
export function useEventListener(event: string, target: HTMLElement | Ref<HTMLElement>, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions = {}) {
  let removeListener = noop;
  const stopWatch = watch(
    () => isRef(target) ? target.value : target,
    (element: HTMLElement) => {
      removeListener();
      if (!element) return;
      element.addEventListener(event, listener, options);

      removeListener = () => {
        element.removeEventListener(event, listener, options);
        removeListener = noop;
      }
    },
    { immediate: true, flush: 'post' }
  );

  const stopListening = () => {
    stopWatch();
    removeListener();
  }

  if(getCurrentScope()) {
    onScopeDispose(stopListening);
  }

  return stopListening;
}
