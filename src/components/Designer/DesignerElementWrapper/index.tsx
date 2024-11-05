import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useState } from 'react';
import { BiSolidTrash } from 'react-icons/bi';

import s from './styles.module.scss';

import { useDesigner } from '@/hooks';

import {
	type FormElementInstance,
	FormElements,
} from '@/components/FormElements';

export type DesignerElementWrapperProps = {
	element: FormElementInstance;
};

export const DesignerElementWrapper = ({
	element,
}: DesignerElementWrapperProps) => {
	const { removeElement, setSelectedElement } = useDesigner();
	const [mouseIsOver, setMouseIsOver] = useState(false);
	const DesignerElement = FormElements[element.type].designerComponent;

	const topHalf = useDroppable({
		id: `${element.id}-top`,
		data: {
			type: element.type,
			elementId: element.id,
			isTopHalfDesignerElement: true,
		},
	});

	const bottomHalf = useDroppable({
		id: `${element.id}-bottom`,
		data: {
			type: element.type,
			elementId: element.id,
			isBottomHalfDesignerElement: true,
		},
	});

	const draggable = useDraggable({
		id: `${element.id}-drag-handler`,
		data: {
			type: element.type,
			elementId: element.id,
			isDesignerElement: true,
		},
	});

	if (draggable.isDragging) return null;

	return (
		<div
			className={`${s.designerElementWrapper} ${topHalf.isOver ? s.borderTopHalf : ''} ${bottomHalf.isOver ? s.borderBottomHalf : ''}`}
			onMouseEnter={() => setMouseIsOver(true)}
			onMouseLeave={() => setMouseIsOver(false)}
			onClick={(e) => {
				e.stopPropagation();
				setSelectedElement(element);
			}}
			ref={draggable.setNodeRef}
			{...draggable.listeners}
			{...draggable.attributes}
		>
			<div ref={topHalf.setNodeRef} className={s.top} />
			<div ref={bottomHalf.setNodeRef} className={s.bottom} />
			{mouseIsOver && (
				<>
					<div className={s.message}>
						<p>Click for properties or drag for move</p>
					</div>
					<div
						className={s.exclude}
						onClick={(e) => {
							e.stopPropagation();
							removeElement(element.id);
						}}
						onKeyDown={(e) => {
							e.stopPropagation();
							removeElement(element.id);
						}}
					>
						<BiSolidTrash />
					</div>
				</>
			)}
			{topHalf.isOver && <div className={s.ghostBorderHalfTop} />}
			<DesignerElement elementInstance={element} />
			{bottomHalf.isOver && <div className={s.ghostBorderHalfBottom} />}
		</div>
	);
};
