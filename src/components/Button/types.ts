import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type buttonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	variant?: 'default' | 'outline' | 'negative' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	width?: 'fluid' | 'contain';
	loading?: boolean;
};
