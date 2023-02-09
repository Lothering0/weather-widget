import { createApp } from "vue";
import "@/styles/reset.scss";
import "@/styles/main.scss";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faDroplet,
  faLocationArrow,
  faEye,
  faTemperatureLow,
  faArrowDown,
  faGear,
  faXmark,
  faTrash,
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faDroplet,
  faLocationArrow,
  faEye,
  faTemperatureLow,
  faArrowDown,
  faGear,
  faXmark,
  faTrash,
  faCirclePlus
);

createApp(App)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
