import { createApp } from "vue";
import App from "./app.vue";
import "./assets/css/styles.css";
import router from "./router/index";

const app = createApp(App);

app.use(router).mount("#root");
