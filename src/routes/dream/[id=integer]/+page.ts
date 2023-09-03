import { getSingleDreamURI } from "$lib/constants/apis"
import { getSingleDream } from "$lib/apis/api.js";
import { destinationAsURI, navigateTo } from "$lib/utils.js";
import { HOME_MENU } from "$lib/constants/strings.js";
import type { dreamCard } from "$lib/apis/types.js";

//** fetch dream data */
const fetchSingleDream = async (dreamId : string) => {
  try {
    const card = await getSingleDream<dreamCard>(getSingleDreamURI(dreamId), {headers : {"Cache-Control" : "no-store"}});
    return card.data;
  } catch(err) {
    console.log('ERR : fetching Single Dream / ' + err);
    return null;
  }
}

//** TODO : if dream data is null, need to show confirm modal */
export async function load({params}) {
  const dreamId = params.id;
  const dream = await fetchSingleDream(dreamId);
  return { dream };
}