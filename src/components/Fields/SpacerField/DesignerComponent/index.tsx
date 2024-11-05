import { LuSeparatorHorizontal } from 'react-icons/lu';
import s from './styles.module.scss';

import type { FormElementInstance } from '@/components/FormElements';

export const DesignerComponent = ({
	elementInstance,
}: { elementInstance: FormElementInstance }) => {
	const { height } = elementInstance.extraAttributes as any;
	return (
		<div className={s.designerComponent}>
			<LuSeparatorHorizontal />
			{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
			<label className={s.label}>Spacer Field: {height}px</label>
		</div>
	);
};
