import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import compsUI from "@/lib/compsUI";


createApp(App).use(router).use(compsUI).mount("#app");
