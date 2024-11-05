'use client';

import { Button } from '../Button';

import type { VisitBtnProps } from './types';

export const VisitBtn = ({ sharedUrl }: VisitBtnProps) => {
	const sharedLink = `${window.location.origin}/submit/${sharedUrl}`;

	return (
		<Button
			variant="negative"
			width="fluid"
			onClick={() => window.open(sharedLink, '_blank')}
		>
			Visit
		</Button>
	);
};
