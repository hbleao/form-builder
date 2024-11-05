'use client';

import { BsTextParagraph } from 'react-icons/bs';
import type { ElementsType, FormElement } from '../../FormElements';
import { DesignerComponent } from './DesignerComponent';
import { FormComponent } from './FormComponent';
import { PropertiesComponent } from './PropertiesComponent';

const type: ElementsType = 'ParagraphField';

export const ParagraphFieldFormElement: FormElement = {
	type,
	construct: (id: string) => ({
		id,
		type,
		extraAttributes: {
			text: 'Text here',
		},
	}),
	designerBtnElement: {
		icon: BsTextParagraph,
		label: 'Paragraph Field',
	},
	designerComponent: DesignerComponent,
	formComponent: FormComponent,
	propertiesComponent: PropertiesComponent,
	validate: () => true,
};
