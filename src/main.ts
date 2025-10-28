import { mount } from "svelte";
import "./App.css";
import App from "./App.svelte";
import { setupI18n } from "./lib/i18n";
import { waitLocale } from "svelte-i18n";

setupI18n();
await waitLocale();

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
