//** Type Declaration Common */
type timestamptz = string;
type uri = string;

//** Response Common */
export interface CommonResponse<T> {
	success: boolean;
	error: null | number;
	response: T;
}

//** DreamCard generation (CamelCase) */
export interface dreamCard {
	dreamId: number;
	dreamTitle: string;
	engDreamTitle: string;
	imageUrl: uri;
	possibleMeanings: string[];
	recommendedTarotCard: string;
	created: timestamptz;
}
