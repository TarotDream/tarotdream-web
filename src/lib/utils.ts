import { goto } from '$app/navigation';
import { moveBack } from './constants/strings';
import { showModal, modalName } from '$lib/stores';

//** [naviagtor] navigating to specific uri */
export const navigateTo = (destination: string) => {
	if(moveBack === destination) history.back();
	else goto(destination);
};

//** [navigator] making destination */
export const destinationAsURI = (menus: string[]) => '/' + menus.join('/');

//** [utility] making number to string */
export const numberToString = (value : number) : string => value + '';

//** [utility] making timestamptz to YYYY.MM.DD string*/
export const timestampToY4M2D2 = (timestamptz : string) : string => {
	const dateObject = new Date(timestamptz);

	const year = dateObject.getFullYear();
	const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
	const day = (dateObject.getDate().toString().padStart(2, '0'));

	return year + "." + month + "." + day;
}

//** [utility] rendering modal */
export const mountModal = (name : string) => {
	showModal.set(true);
	modalName.set(name);
}

//** [utility] destroying modal */
export const destroyModal = () => {
	showModal.set(false);
	modalName.set('default');
}