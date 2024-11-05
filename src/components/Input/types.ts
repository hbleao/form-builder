import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	label: string;
	width?: 'fluid' | 'contain';
	errorMessage?: string;
};
