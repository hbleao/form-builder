import type { StatsCardProps } from './types';

import s from './styles.module.scss';

export function StatsCard({
	title,
	className,
	icon,
	helperText,
	loading,
	value,
}: StatsCardProps) {
	return (
		<div className={`${s.statsCard} ${s[`${className}`]}`}>
			<header className={s.statsCardHeader}>
				<strong className={s.statsCardHeaderTitle}>{title}</strong>
				{icon}
			</header>
			<div className={s.statsCardContent}>{loading ? 0 : value}</div>
			<p className={s.statsCardHelperText}>{helperText}</p>
		</div>
	);
}
