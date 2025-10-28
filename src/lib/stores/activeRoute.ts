import { writable } from "svelte/store";

export const selectedRoute = writable({ selected: location.pathname });
