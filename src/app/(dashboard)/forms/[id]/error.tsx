'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import s from './error.module.scss';

import { Button } from '@/components';

export type ErrorPageProps = {
	error: Error;
};

const ErrorPage = ({ error }: ErrorPageProps) => {
	const router = useRouter();

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className={s.error}>
			<h2 className={s.title}>Something went wrong!</h2>
			<Button onClick={() => router.push('/')}>Go back to home</Button>
		</div>
	);
};

export default ErrorPage;
