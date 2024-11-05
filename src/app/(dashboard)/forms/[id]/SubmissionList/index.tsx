import { formatDistance } from 'date-fns';
import type { ReactNode } from 'react';

import s from './styles.module.scss';

import { GetFormWithSubmissions } from '../../../../../../actions/form';

import type { FormElementInstance } from '@/components/FormElements';

export type SubmissionListProps = { id: string };

type Column = {
	id: string;
	label: string;
	required: boolean;
	type: ReactNode;
};

type Row = {
	[key: string]: string & {
		submittedAt: Date;
	};
};

export const SubmissionList = async ({ id }: SubmissionListProps) => {
	const form = await GetFormWithSubmissions(Number(id));

	if (!form) {
		throw new Error('Form not found!');
	}

	const formElements = JSON.parse(form.content) as FormElementInstance[];
	const columns: Column[] = [];
	const rows: Row[] = [];

	// biome-ignore lint/complexity/noForEach: <explanation>
	formElements.forEach((element) => {
		switch (element.type) {
			case 'TextField':
				columns.push({
					id: element.id,
					label: element?.extraAttributes?.label,
					required: element?.extraAttributes?.required,
					type: element.type,
				});
				break;

			default:
				break;
		}
	});

	form.FormSubmition.map((submission) => {
		const content = JSON.parse(submission.content);
		rows.push({
			...content,
			submittedAt: submission.createdAt,
		});
	});

	return (
		<table className={s.table}>
			<thead>
				<tr>
					{columns.map((element) => (
						<th key={element.id} className={s.th}>
							{element?.label}
						</th>
					))}
					<th className={s.largeCell}>Submitted At</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr key={row.id}>
						{columns.map((column) => (
							<td key={column.id} className={s.cell}>
								{row[column.id]}
							</td>
						))}
						<td className={s.largeCell}>
							{formatDistance(row.submittedAt, new Date(), {
								addSuffix: true,
							})}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
