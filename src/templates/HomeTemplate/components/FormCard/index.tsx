'use client';
import { formatDistance } from 'date-fns';
import { useRouter } from 'next/navigation';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaEdit, FaWpforms } from 'react-icons/fa';
import { LuView } from 'react-icons/lu';

import s from './styles.module.scss';

import { Badge, Button } from '@/components';

import type { FormCardProps } from './types';

export const FormCard = (form: FormCardProps) => {
	const router = useRouter();

	function handleRedirectToViewSubmissions(formId: string) {
		router.push(`/forms/${formId}`);
	}

	function handleRedirectEditForm(formId: string) {
		router.push(`/builder/${formId}`);
	}

	return (
		<div className={s.container}>
			<header className={s.header}>
				<strong>{form.name}</strong>
				{form.published ? (
					<Badge variant="published">Published</Badge>
				) : (
					<Badge variant="warn">Draft</Badge>
				)}
			</header>
			<div className={s.time}>
				{formatDistance(form.createdAt, new Date(), {
					addSuffix: true,
				})}
				{form.published && (
					<div className={s.info}>
						<LuView />
						<span>{form.visits.toLocaleString()}</span>
						<FaWpforms />
						<span>{form.submissions.toLocaleString()}</span>
					</div>
				)}
			</div>
			<div className={s.divisor} />
			<div className={s.description}>
				{form.description || 'No description'}
			</div>
			<footer className={s.footer}>
				{form.published && (
					<Button
						size="md"
						width="fluid"
						onClick={() => handleRedirectToViewSubmissions(String(form.id))}
					>
						View submitions <BiRightArrowAlt />
					</Button>
				)}
				{!form.published && (
					<Button
						size="md"
						width="fluid"
						onClick={() => handleRedirectEditForm(String(form.id))}
					>
						Edit form <FaEdit />
					</Button>
				)}
			</footer>
		</div>
	);
};
