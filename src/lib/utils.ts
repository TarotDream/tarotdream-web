import { goto } from '$app/navigation';

export const navigateTo = (destination: string) => {
	goto(destination);
};

export const destinationAsURI = (menus: string[]) => '/' + menus.join('/');

export const numberToString = (value : number) : string => value + '';

export const timestampToY4M2D2 = (timestamptz : string) : string => {
	const dateObject = new Date(timestamptz);

	const year = dateObject.getFullYear();
	const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
	const day = (dateObject.getDate().toString().padStart(2, '0'));

	return year + "." + month + "." + day;
}