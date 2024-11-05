'use client';

import s from './styles.module.scss';

import type { FormElementInstance } from '@/components/FormElements';

export type FormComponentProps = {
	elementInstance: FormElementInstance;
};

export const FormComponent = ({ elementInstance }: FormComponentProps) => {
	const { height } = elementInstance.extraAttributes as any;

	return (
		<div
			className={`${s.designerComponent}`}
			style={{ height: `${height}px` }}
		/>
	);
};
