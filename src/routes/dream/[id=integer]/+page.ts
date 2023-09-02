import { getSingleDreamURI } from "$lib/constants/apis"
import { getSingleDream } from "$lib/apis/api.js";
import type { DreamCard } from "$lib/apis/types.js";

//** fetch dream data */
const fetchSingleDream = async (dreamId : string) => {
  try {
    const card = await getSingleDream<DreamCard>(getSingleDreamURI(dreamId));
    return card.data;
  } catch(err) {
    console.log('ERR : fetching Single Dream / ' + err);
    return null;
  }
}

export async function load({params}) {
  const dreamId = params.id;
  const dream = await fetchSingleDream(dreamId);
  return {dream};
}