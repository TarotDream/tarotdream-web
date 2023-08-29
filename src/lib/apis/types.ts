// type declarations

type timestamptz = string;

type uri = string;

export interface DreamCard {
	id: string;
	title: string;
	created_at: timestamptz;
	content: string;
	imageUri: uri;
}

export interface keywords {
	keywords: string[];
}

export interface DreamCardResponse extends DreamCard, keywords {}
