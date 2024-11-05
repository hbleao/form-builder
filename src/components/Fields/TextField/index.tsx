'use client';
import { MdTextFields } from 'react-icons/md';

import type { ElementsType, FormElement } from '../../FormElements';
import { DesignerComponent } from './DesignerComponent';
import { FormComponent } from './FormComponent';
import { PropertiesComponent } from './PropertiesComponent';

const type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
	type,
	construct: (id: string) => ({
		id,
		type,
		extraAttributes: {
			label: 'Text field',
			helperText: 'Helper text',
			required: false,
			placeholder: 'Value here...',
		},
	}),
	designerBtnElement: {
		icon: MdTextFields,
		label: 'Text Field',
	},
	designerComponent: DesignerComponent,
	formComponent: FormComponent,
	propertiesComponent: PropertiesComponent,
	validate: (formElement, currentValue): boolean => {
		if (formElement?.extraAttributes?.required) {
			return currentValue.length > 0;
		}

		return true;
	},
};
