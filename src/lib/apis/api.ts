import modelInstance from './model';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { CommonResponse } from './types';

export const postDream = async <T>(
	url: string,
	data?: { dreamStory: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await modelInstance.post(url, data, config);
	return response;
};

export const postDreamImage = async <T>(
	url: string,
	data?: { dreamId: string; engDreamTitle: string; recommendedTarotCard: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await modelInstance.post(url, data, config);
	return response;
};

export const getSingleDream = async<T>(url:string) : Promise<AxiosResponse<CommonResponse<T>>> =>{
	const response = await modelInstance.get(url);
	return response;
}