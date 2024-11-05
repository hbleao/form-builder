'use client';

import s from './styles.module.scss';

import { Button, Input } from '@/components';

import toast from 'react-hot-toast';
import { ImShare } from 'react-icons/im';
import type { VisitBtnProps } from './types';

export const FormLinkShare = ({ sharedUrl }: VisitBtnProps) => {
	const sharedLink = `${window.location.origin}/submit/${sharedUrl}`;

	return (
		<div className={s.formLinkShare}>
			<Input label="Link to share" width="fluid" readOnly value={sharedLink} />
			<div className={s.button}>
				<Button
					variant="negative"
					width="fluid"
					onClick={() => {
						navigator.clipboard.writeText(sharedLink);
						toast.success('Link copied to clipboard.');
					}}
				>
					<ImShare />
					Share link
				</Button>
			</div>
		</div>
	);
};
