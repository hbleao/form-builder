'use client';
import { useCallback, useRef, useState, useTransition } from 'react';

import s from './styles.module.scss';

import { Button } from '../Button';
import { FormElements } from '../FormElements';

import toast, { Toaster } from 'react-hot-toast';
import { HiCursorClick } from 'react-icons/hi';
import { SubmitForm } from '../../../actions/form';
import type { FormSubmitComponentProps } from './types';

export const FormSubmitComponent = ({
	formUrl,
	content,
}: FormSubmitComponentProps) => {
	const formValues = useRef<{ [key: string]: string }>({});
	const formErrors = useRef<{ [key: string]: boolean }>({});
	const [renderKey, setRenderKey] = useState(new Date().getTime());
	const [isPending, startTransition] = useTransition();
	const [submitted, setSubmitted] = useState(false);

	const validateForm = useCallback(() => {
		for (const field of content) {
			const actualValue = formValues.current[field.id] || '';
			const validValue = FormElements[field.type].validate(field, actualValue);

			if (!validValue) {
				formErrors.current[field.id] = true;
			}
		}

		const hasErrors = Object.keys(formErrors.current).length > 0;

		if (hasErrors) {
			return false;
		}

		return true;
	}, [content]);

	const submitValue = useCallback((key: string, value: string) => {
		formValues.current[key] = value;
	}, []);

	async function handleSubmit() {
		formErrors.current = {};
		const validForm = validateForm();

		if (!validForm) {
			setRenderKey(new Date().getTime());
			toast.error('Please, check form errors.', {
				position: 'bottom-right',
			});
			return;
		}

		try {
			const jsonContent = JSON.stringify(formValues.current);
			await SubmitForm(formUrl, jsonContent);
			setSubmitted(true);
		} catch (error) {
			toast.error('Something went wrong!', {
				position: 'bottom-right',
			});
		}
	}

	if (submitted) {
		return (
			<div className={s.formSubmit}>
				<div key={renderKey} className={s.form}>
					<h1>Thank you for submitted this form</h1>
				</div>
			</div>
		);
	}

	return (
		<div className={s.formSubmit}>
			<Toaster />
			<div key={renderKey} className={s.form}>
				{content.map((element) => {
					const FormElement = FormElements[element.type].formComponent;
					return (
						<FormElement
							key={element.id}
							elementInstance={element}
							submitValue={submitValue}
							isInvalid={formErrors.current[element.id]}
							defaultValue={formValues.current[element.id]}
						/>
					);
				})}
				<Button
					size="md"
					className={s.button}
					disabled={isPending}
					loading={isPending}
					onClick={() => startTransition(handleSubmit)}
				>
					<HiCursorClick size={20} />
					Submit
				</Button>
			</div>
		</div>
	);
};
