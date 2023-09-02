import { getAllDreamsURI } from "$lib/constants/apis"
import { getDreams } from "$lib/apis/api.js";
import type { dreamCard } from "$lib/apis/types.js";

//** fetch all dreams */
//** TODO : currently, trimming dream card which id is smaller then 15. DB needs to be cleaned */
const fetchDreams = async () => {
  try {
    const card = await getDreams<dreamCard[]>(getAllDreamsURI());
    return { ...card.data, response : card.data.response.slice(15)};
  } catch(err) {
    console.log('ERR : fetching Single Dream / ' + err);
    return null;
  }
}

export async function load() {
  const dreams = await fetchDreams();
  return { dreams };
}