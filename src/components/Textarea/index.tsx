import s from './styles.module.scss';

import type { TextareaProps } from './types';

export const Textarea = ({ label, errorMessage, ...props }: TextareaProps) => {
	return (
		<div className={s.container}>
			<label className={s.label} htmlFor={label}>
				{label}
			</label>
			<textarea
				className={s.textarea}
				name={label}
				id={label}
				rows={5}
				cols={5}
				{...props}
			/>
			{!!errorMessage && <span className={s.error}>{errorMessage}</span>}
		</div>
	);
};
