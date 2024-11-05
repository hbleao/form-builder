'use client';

import { RiSeparator } from 'react-icons/ri';
import type { ElementsType, FormElement } from '../../FormElements';
import { DesignerComponent } from './DesignerComponent';
import { FormComponent } from './FormComponent';
import { PropertiesComponent } from './PropertiesComponent';

const type: ElementsType = 'SeparatorField';

export const SeparatorFieldFormElement: FormElement = {
	type,
	construct: (id: string) => ({
		id,
		type,
	}),
	designerBtnElement: {
		icon: RiSeparator,
		label: 'Separator Field',
	},
	designerComponent: DesignerComponent,
	formComponent: FormComponent,
	propertiesComponent: PropertiesComponent,
	validate: () => true,
};
