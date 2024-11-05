'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BsFileEarmarkPlus } from 'react-icons/bs';

import s from './styles.module.scss';

import { CreateForm } from '../../../actions/form';

import { Button, Dialog, Input, Textarea } from '@/components';

export const CreateFormBtn = () => {
	const router = useRouter();
	const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [isSubmittingForm, setIsSubmittingForm] = useState(false);

	async function handleSubmit() {
		try {
			setIsSubmittingForm(true);
			const formId = await CreateForm({ name, description });
			toast.success('Success, Form created successfully', {
				position: 'top-right',
			});
			router.push(`/builder/${formId}`);
		} catch (error) {
			toast.error('Error, Something went wrong, please try again later', {
				position: 'top-right',
			});
		} finally {
			setIsSubmittingForm(false);
		}
	}

	return (
		<>
			<Toaster />
			<button
				className={s.button}
				type="button"
				onClick={() => setIsOpenRegisterForm(true)}
			>
				<BsFileEarmarkPlus />
				Create new Form
			</button>
			<Dialog
				isOpen={isOpenRegisterForm}
				handleCloseModal={() => setIsOpenRegisterForm(false)}
				title="Create form"
				description="Create a new form to start collecting responses"
			>
				<form className={s.form}>
					<Input
						label="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Textarea
						label="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</form>
				<Button
					loading={isSubmittingForm}
					size="md"
					onClick={() => handleSubmit()}
				>
					Save Form
				</Button>
			</Dialog>
		</>
	);
};
