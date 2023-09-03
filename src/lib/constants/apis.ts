// TAROT Dream DOMAIN
export const TAROT_DREAM_API_DOMAIN = "https://bgremp.com"
export const TAROT_DREAM_DOMAIN = "https://tarotdream.netlify.app";

// api destination uri
export const postDreamURI = () => '/dream/generate';
export const postDreamImageURI = () => '/dream/regenerate';
export const getAllDreamsURI = () => '/dream';
export const getSingleDreamURI = (dreamId:string) => `/dream/${dreamId}`;
