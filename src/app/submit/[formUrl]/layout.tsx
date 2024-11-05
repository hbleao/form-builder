import type { ReactNode } from 'react';

import s from './layout.module.scss';

function Layout({ children }: { children: ReactNode }) {
	return <div className={s.layout}>{children}</div>;
}

export default Layout;
