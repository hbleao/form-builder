import type { IconType } from 'react-icons';
import {
	ParagraphFieldFormElement,
	SeparatorFieldFormElement,
	SpacerFieldFormElement,
	SubTitleFieldFormElement,
	TextFieldFormElement,
	TitleFieldFormElement,
} from '../Fields';

export type ElementsType =
	| 'TextField'
	| 'TitleField'
	| 'SubTitleField'
	| 'SeparatorField'
	| 'SpacerField'
	| 'ParagraphField';

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
	type: ElementsType;

	construct: (id: string) => FormElementInstance;

	designerBtnElement: {
		icon: IconType;
		label: string;
	};

	designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
	formComponent: React.FC<{
		elementInstance: FormElementInstance;
		submitValue?: SubmitFunction;
		defaultValue?: string;
		isInvalid?: boolean;
	}>;
	propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;

	validate: (formElement: FormElementInstance, currentValue: string) => boolean;
};

export type FormElementInstance = {
	id: string;
	type: ElementsType;
	extraAttributes?: Record<string, any>;
};

type FormElementsType = {
	[key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
	TextField: TextFieldFormElement,
	TitleField: TitleFieldFormElement,
	SubTitleField: SubTitleFieldFormElement,
	ParagraphField: ParagraphFieldFormElement,
	SeparatorField: SeparatorFieldFormElement,
	SpacerField: SpacerFieldFormElement,
};
