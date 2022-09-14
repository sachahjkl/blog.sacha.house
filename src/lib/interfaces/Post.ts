import type { ContentLight } from './Content';

export interface PostDefault {
	title: string;
	date: string;
	slug: string;
	content: ContentLight;
}

export interface PostLight {
	slug: string;
	title: string;
}
