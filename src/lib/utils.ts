import { goto } from '$app/navigation';

export const navigateTo = (destination: string) => {
	goto(destination);
};
