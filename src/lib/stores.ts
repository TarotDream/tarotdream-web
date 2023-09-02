import { writable } from "svelte/store"

export const toastMessage = writable(null);
export const showModal = writable(false);
export const modalName = writable('defaultModal');