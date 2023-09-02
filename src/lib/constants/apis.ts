// TAROT Dream DOMAIN
export const TAROT_DREAM_DOMAIN = "https://bgremp.com"

// api destination uri
export const postDreamURI = () => '/dream/generation';
export const postDreamImageURI = () => '/dream/regeneration';
export const getAllDreamsURI = () => '/dream';
export const getSingleDreamURI = (dreamId:string) => `/dream/${dreamId}`;
