import { writable } from "svelte/store"

export const toastMessage = writable('');
export const showModal = writable(false);
export const modalName = writable('defaultModal');