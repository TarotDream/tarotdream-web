// TAROT Dream DOMAIN
export const TAROT_DREAM_DOMAIN = "https://bgremp.com"

// api destination uri
export const postDreamURI = () => '/dream/generate';
export const postDreamImageURI = () => '/dream/regenerate';
export const getAllDreamsURI = () => '/dream';
export const getSingleDreamURI = (dreamId:string) => `/dream/${dreamId}`;
