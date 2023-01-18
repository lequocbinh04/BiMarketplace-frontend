import { App } from "vue";
import VTooltip from "@/directives/VTooltip";

const components = import.meta.glob("@/components/ui/*.vue", {
  eager: true,
});

const compsUI = (app: App<Element>) => {
  app.directive("tooltip", VTooltip);

  Object.entries(components).forEach(([path, definition]: any) => {
    const componentName = path
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");
    app.component(componentName, definition.default);
  });
};

export default compsUI;
