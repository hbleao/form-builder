'use client';
import { useState } from 'react';
import { MdPreview } from 'react-icons/md';

import s from './styles.module.scss';

import { useDesigner } from '@/hooks';

import { Button, Dialog } from '@/components';
import { FormElements } from '../FormElements';

export const PreviewDialogBtn = () => {
	const { elements } = useDesigner();
	const [isOpenDialogPreview, setIsOpenDialogPreview] = useState(false);

	return (
		<div>
			<Dialog
				title="Form Preview"
				description="This is now form will look to your users."
				isOpen={isOpenDialogPreview}
				handleCloseModal={() => setIsOpenDialogPreview(false)}
			>
				<div className={s.dialogContent}>
					{elements.map((element) => {
						const FormComponent = FormElements[element.type].formComponent;
						return <FormComponent key={element.id} elementInstance={element} />;
					})}
				</div>
			</Dialog>
			<Button
				width="contain"
				variant="outline"
				size="sm"
				onClick={() => setIsOpenDialogPreview(true)}
			>
				<MdPreview />
				Preview
			</Button>
		</div>
	);
};
