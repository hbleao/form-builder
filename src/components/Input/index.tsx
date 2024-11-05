import s from './styles.module.scss';

import type { InputProps } from './types';

export const Input = ({
	label,
	width = 'fluid',
	errorMessage,
	...props
}: InputProps) => {
	return (
		<div className={`${s.container} ${s[width]}`}>
			<label className={s.label} htmlFor={label}>
				{label}
			</label>
			<input
				id={label}
				name={label}
				className={s.input}
				type="text"
				{...props}
			/>
			{!!errorMessage && <span className={s.error}>{errorMessage}</span>}
		</div>
	);
};
