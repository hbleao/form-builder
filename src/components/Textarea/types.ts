import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

export type TextareaProps = DetailedHTMLProps<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
> & {
	label: string;
	errorMessage?: string;
};
