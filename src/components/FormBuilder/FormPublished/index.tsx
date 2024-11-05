'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Confetti from 'react-confetti';
import toast, { Toaster } from 'react-hot-toast';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import s from './styles.module.scss';

import { Button, Input } from '@/components';

export type FormPublishedProps = {
	id: number;
	sharedUrl: string;
};

export const FormPublished = ({ sharedUrl, id = 0 }: FormPublishedProps) => {
	const [isCopy, setIsCopy] = useState(false);
	const router = useRouter();

	return (
		<div className={s.published}>
			<Confetti
				width={window.innerWidth}
				height={window.innerHeight}
				numberOfPieces={1000}
				recycle={false}
			/>
			<Toaster />
			<div className={s.wrapper}>
				<div className={s.header}>
					<h1 className={s.title}> 🎊🎊 Form Published 🎊🎊</h1>
					<h2 className={s.subtitle}>Share this form</h2>
					<h3 className={s.description}>
						Anyone with the link can view and submit form
					</h3>
				</div>

				<div className={s.content}>
					<Input label="Link" value={sharedUrl} width="fluid" readOnly />
					<Button
						variant="default"
						size="md"
						onClick={() => {
							navigator.clipboard.writeText(sharedUrl);
							setIsCopy(true);
							toast.success('Copied, Link copied to clipboard.', {
								position: 'bottom-right',
							});
						}}
					>
						{isCopy ? 'Copied' : 'Copy link'}
					</Button>
				</div>
				<footer className={s.footer}>
					<Button
						variant="ghost"
						size="sm"
						width="contain"
						onClick={() => router.push('/')}
					>
						<BsArrowLeft />
						Got back home
					</Button>
					<Button
						variant="ghost"
						size="sm"
						width="contain"
						onClick={() => router.push(`/forms/${id}`)}
					>
						Form detail
						<BsArrowRight />
					</Button>
				</footer>
			</div>
		</div>
	);
};
