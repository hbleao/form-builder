'use client';

import { LuHeading1 } from 'react-icons/lu';
import type { ElementsType, FormElement } from '../../FormElements';
import { DesignerComponent } from './DesignerComponent';
import { FormComponent } from './FormComponent';
import { PropertiesComponent } from './PropertiesComponent';

const type: ElementsType = 'TitleField';

export const TitleFieldFormElement: FormElement = {
	type,
	construct: (id: string) => ({
		id,
		type,
		extraAttributes: {
			title: 'Title field',
		},
	}),
	designerBtnElement: {
		icon: LuHeading1,
		label: 'Title Field',
	},
	designerComponent: DesignerComponent,
	formComponent: FormComponent,
	propertiesComponent: PropertiesComponent,
	validate: () => true,
};
