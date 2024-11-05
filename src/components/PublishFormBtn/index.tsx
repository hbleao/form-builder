'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import s from './styles.module.scss';

import { PublishForm } from '../../../actions/form';

import { Button, Dialog, Spinner } from '@/components';

export const PublishFormBtn = ({ id }: { id: number }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [loading, startTransition] = useTransition();
	const router = useRouter();

	async function publishForm() {
		try {
			await PublishForm(id);
			router.refresh();
		} catch (error) {
			toast.error('Something went wrong');
		}
	}
	return (
		<>
			<Toaster />
			<Dialog
				title="Are you absolutely sure?"
				description="This action cannot be undone. After publishing you will not be able to edit this form. By publishing this form you will make it available to the public and you be able to collect submissions."
				isOpen={isOpenModal}
				handleCloseModal={() => setIsOpenModal(false)}
			>
				<div className={s.buttons}>
					<Button
						variant="outline"
						width="contain"
						size="md"
						onClick={() => setIsOpenModal(false)}
					>
						Cancel
					</Button>
					<Button
						type="button"
						width="contain"
						size="md"
						onClick={() => startTransition(publishForm)}
					>
						Publish {loading && <Spinner size="sm" />}
					</Button>
				</div>
			</Dialog>
			<Button
				width="contain"
				variant="negative"
				size="sm"
				onClick={() => setIsOpenModal(true)}
			>
				Publish
			</Button>
		</>
	);
};
