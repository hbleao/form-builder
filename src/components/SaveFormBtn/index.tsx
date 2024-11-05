'use client';
import { useTransition } from 'react';
import toast from 'react-hot-toast';
import { HiSaveAs } from 'react-icons/hi';

import { useDesigner } from '@/hooks';
import { UpdateFormContent } from '../../../actions/form';
import { Button } from '../Button';

export const SaveFormBtn = ({ id }: { id: number }) => {
	const { elements } = useDesigner();
	const [loading, startTransition] = useTransition();

	const updateFormContent = async () => {
		try {
			const jsonElements = JSON.stringify(elements);
			await UpdateFormContent(id, jsonElements);
			toast.success('Success, Your form has been saved.');
		} catch (error) {
			toast.error('Something went wrong.');
		}
	};

	return (
		<Button
			width="contain"
			variant="outline"
			size="sm"
			disabled={loading}
			loading={loading}
			onClick={() => {
				startTransition(updateFormContent);
			}}
		>
			<HiSaveAs />
			Save
		</Button>
	);
};
