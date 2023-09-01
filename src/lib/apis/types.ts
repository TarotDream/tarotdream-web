//** Type Declaration Common */
type timestamptz = string;
type uri = string;

//** Response Common */
export interface CommonResponse<T> {
	success: boolean;
	error: null | number;
	response: T;
}

//** DreamCard generation */
export interface DreamCard {
	dreamId: number;
	dreamTitle: string;
	engDreamTitle: string;
	imageUrl: uri;
	posssibleMeanings: string[];
	recommendedTarotCard: string;
	created: timestamptz;
}
