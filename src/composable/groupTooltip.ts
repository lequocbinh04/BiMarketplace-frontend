import { getCurrentInstance, shallowRef, nextTick, onUnmounted } from "vue";
import { createSingleton } from "tippy.js";
import createTippy, { defaultOptions } from "@/lib/tippy";

export const useGroupTooltip = (elements?: any, options = {}) => {
  const singleton = shallowRef<any>(null);
  const instance = getCurrentInstance();
  const context: any = instance && (instance.exposed || (instance as any).ctx);
  nextTick(() => {
    let tippyInstances = [];

    if (Array.isArray(elements)) {
      tippyInstances = elements.map((el) => el._tippy || createTippy(el));
    } else {
      tippyInstances = context._tooltipGroup || [];
    }

    singleton.value = createSingleton(tippyInstances, {
      ...defaultOptions,
      ...options,
      theme: "tooltip-theme",
      placement: "right",
      moveTransition: "transform 0.2s ease-out",
      overrides: ["placement", "theme"],
    });

    // if (!elements) {
    //   context.__tpSingleton = singleton.value;
    // }
  });
  onUnmounted(() => {
    singleton.value?.destroy();
  });

  return singleton;
};
