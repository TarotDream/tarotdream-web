import modelInstance from './model';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { CommonResponse } from './types';

//** generate dream */
export const postDream = async <T>(
	url: string,
	data?: { dreamStory: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await modelInstance.post(url, data, config);
	return response;
};

//** regenerate dream image */
export const postDreamImage = async <T>(
	url: string,
	data?: { dreamId: string;},
	config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await modelInstance.post(url, data, config);
	return response;
};

//** get single dream with corresponding dream id */
export const getSingleDream = async<T>(url:string, config?: AxiosRequestConfig) : Promise<AxiosResponse<CommonResponse<T>>> =>{
	const response = await modelInstance.get(url, config);
	return response;
}

//** get generated dreams */
//** TODO : need to fetch limited contents in single api call */
export const getDreams = async<T>(url:string) : Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await modelInstance.get(url);
	return response;
}
