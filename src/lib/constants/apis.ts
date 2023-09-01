// api destination uri
export const postDreamURI = () => '/dream/generation';
export const postDreamImageURI = () => '/dream/regeneration';
export const getAllDreamsURI = () => '/dream';
export const getSingleDreamURI = (dreamId:string) => `/dream/${dreamId}`;
