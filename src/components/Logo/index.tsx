'use client';

import { useRouter } from 'next/navigation';
import s from './styles.module.scss';

export const Logo = () => {
	const router = useRouter();

	return (
		<strong
			onClick={() => router.push('/')}
			onKeyDown={() => router.push('/')}
			className={s.logo}
		>
			PageForm
		</strong>
	);
};
