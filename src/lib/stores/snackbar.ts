import { writable } from "svelte/store";

export const snackbar = writable({
  message: "",
  type: "info",
  visible: false,
});
