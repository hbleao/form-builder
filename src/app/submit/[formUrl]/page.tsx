import type { FormElementInstance } from '@/components/FormElements';
import { GetFormContentByUrl } from '../../../../actions/form';
import s from './styles.module.scss';

import { FormSubmitComponent, Logo } from '@/components';

export type SubmitPageProps = {
	params: {
		formUrl: string;
	};
};

export default async function SubmitPage({ params }: SubmitPageProps) {
	const form = await GetFormContentByUrl(params?.formUrl);

	if (!form) {
		throw new Error('Form not found!');
	}

	const formContent = JSON.parse(form.content) as FormElementInstance[];

	return (
		<>
			<header className={s.submitLogoHeader}>
				<nav className={s.submitPageLogo}>
					<Logo />
				</nav>
			</header>
			<FormSubmitComponent formUrl={params.formUrl} content={formContent} />
		</>
	);
}
