import s from './styles.module.scss';

import { Loader } from '../Loader';

import type { buttonProps } from './types';

export const Button = ({
	variant = 'default',
	size = 'sm',
	width = 'fluid',
	type = 'button',
	className,
	loading,
	children,
	...props
}: buttonProps) => {
	return (
		<button
			className={`${s.button} ${s[size]} ${s[width]} ${s[variant]} ${className}`}
			{...props}
		>
			{loading ? <Loader /> : <>{children}</>}
		</button>
	);
};
