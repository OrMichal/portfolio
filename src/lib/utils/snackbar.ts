import { time } from "svelte-i18n";
import { snackbar } from "../stores/snackbar";

export function showSnackbar(
  message: string,
  type: "info" | "error" | "alert" | "success" = "info",
  timeout = 3000,
) {
  snackbar.set({ message, type, visible: true });

  setTimeout(() => {
    snackbar.update((s) => ({ ...s, visible: false }));
  }, timeout);
}
