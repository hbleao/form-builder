import s from './(layout)/styles.module.scss';

import { Logo } from '@/components';

import type { LayoutProps } from './(layout)/types';

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={s.dashboardLayout}>
			<nav className={s.dashboardNav}>
				<Logo />
			</nav>
			<main className={s.dashboardMain}>{children}</main>
		</div>
	);
};

export default Layout;
