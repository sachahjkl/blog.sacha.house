import type { Content, ContentLight } from './Content';

export interface Page {
	title: string;
	slug: string;
	subtitle: string;
	content: Content;
}
export interface PageLight {
	title: string;
	slug: string;
	subtitle: string;
	content: ContentLight;
}
