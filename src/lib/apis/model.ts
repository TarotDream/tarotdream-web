import axios, { type InternalAxiosRequestConfig } from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';
import { TAROT_DREAM_DOMAIN } from"$lib/constants/strings";

const modelInstance = axios.create({
	baseURL: TAROT_DREAM_DOMAIN,
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	const { method, url } = config;
	console.log(`[API - REQUEST] ${method?.toUpperCase()} ${url}`);

	//** implementation required if signin is available */
	// const token = getCookie(COOKIE_KEY.LOGIN_TOKEN);
	// config.headers.Authorization = `Bearer ${token}`;
	//** implementation required if signin is available */

	return config;
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
	const { method, url } = res.config;
	const { success, error, response } = res.data;
	if (success) {
		console.log(`[API - RESPONSE] ${method?.toUpperCase()} ${url} | ${success}`);
	} else {
		console.log(`[API - ERROR] ${method?.toUpperCase()} ${url} | ${success}`);
	}

	return res;
};

const onError = (err: AxiosError | Error): Promise<AxiosError> => {
	if (axios.isAxiosError(err)) {
		const { method, url } = err.config as InternalAxiosRequestConfig;
		if (err.response) {
			const { success, error, response } = err.response.data;
			console.log(`[API - ERROR] ${method?.toUpperCase} ${url} | ${response}`);
		} else {
			console.log(`[API] | Error ${err.message}`);
		}
	} else {
		console.log(`[API] | Error ${err.message}`);
	}
	console.log(err);
	return Promise.reject(err);
};

modelInstance.interceptors.request.use(onRequest);
modelInstance.interceptors.response.use(onResponse, onError);

export default modelInstance;
