import { getAllDreamsURI } from "$lib/constants/apis"
import { getDreams } from "$lib/apis/api.js";
import { sortDreamInDescendingOrder } from "$lib/utils"
import type { dreamCard } from "$lib/apis/types.js";

//** fetch all dreams */
const fetchDreams = async () => {
  try {
    const card = await getDreams<dreamCard[]>(getAllDreamsURI());
    const response = sortDreamInDescendingOrder(card.data.response);
    return {...card.data, response};
  } catch(err) {
    console.log('ERR : fetching Single Dream / ' + err);
    return null;
  }
}

export async function load() {
  const dreams = await fetchDreams();
  return { dreams };
}