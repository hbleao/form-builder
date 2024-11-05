'use client';
import {
	DndContext,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { useEffect, useState } from 'react';

import s from './styles.module.scss';

import { FormPublished } from './FormPublished';

import {
	Designer,
	DragOverlayWrapper,
	PreviewDialogBtn,
	PublishFormBtn,
	SaveFormBtn,
	Spinner,
} from '@/components';

import { useDesigner } from '@/hooks';

import type { FormBuilderProps } from './types';

export const FormBuilder = ({ form }: FormBuilderProps) => {
	const { setElements } = useDesigner();
	const [isReady, setIsReady] = useState(false);
	const mouseSensor = useSensor(MouseSensor, {
		activationConstraint: {
			distance: 10,
		},
	});
	const touchSensor = useSensor(TouchSensor, {
		activationConstraint: {
			delay: 300,
			tolerance: 5,
		},
	});
	const sensors = useSensors(mouseSensor, touchSensor);
	const sharedUrl = `${window.location.origin}/submit/${form.sharedUrl}`;

	useEffect(() => {
		if (isReady) return;
		const jsonFormContent = JSON.parse(form.content);
		setElements(jsonFormContent);
		setIsReady(true);
	}, [form, setElements]);

	if (!isReady) {
		return (
			<div className={s.notReady}>
				<Spinner size="md" />
			</div>
		);
	}
	console.log(form);
	if (form.published) {
		return <FormPublished id={form?.id} sharedUrl={sharedUrl} />;
	}

	return (
		<DndContext sensors={sensors}>
			<main>
				<div className={s.container}>
					<h2 className={s.title}>
						<span>Form: </span>
						{form.name}
					</h2>
					<div className={s.buttons}>
						<PreviewDialogBtn />
						{!form.published && (
							<>
								<SaveFormBtn id={form.id} />
								<PublishFormBtn id={form.id} />
							</>
						)}
					</div>
				</div>
				<div className={s.canvas}>
					<Designer />
				</div>
			</main>

			<DragOverlayWrapper />
		</DndContext>
	);
};
