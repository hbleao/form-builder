import s from './styles.module.scss';

import type { BadgeProps } from './types';

export const Badge = ({ variant, children }: BadgeProps) => {
	return <span className={`${s.badge} ${s[variant]}`}>{children}</span>;
};
