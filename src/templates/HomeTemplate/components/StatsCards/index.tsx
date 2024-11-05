'use client';
import { FaWpforms } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import { LuView } from 'react-icons/lu';
import { TbArrowBounce } from 'react-icons/tb';

import s from './styles.module.scss';

import { StatsCard } from '../StatCard';

import type { StatsCardsProps } from './types';

export function StatsCards(props: StatsCardsProps) {
	const { loading, data } = props;

	return (
		<div className={s.statsCards}>
			<StatsCard
				title="Total visits"
				className="info"
				icon={<LuView />}
				helperText="All time form visits"
				value={data?.visits.toLocaleString() || ''}
				loading={loading}
			/>

			<StatsCard
				title="Total submissions"
				className="warn"
				icon={<FaWpforms />}
				helperText="All time form submissions"
				value={data?.submissions.toLocaleString() || ''}
				loading={loading}
			/>

			<StatsCard
				title="Submissions rate"
				className="success"
				icon={<HiCursorClick />}
				helperText="Visits that result in form submission"
				value={`${data?.submissionRate.toLocaleString()}%` || ''}
				loading={loading}
			/>

			<StatsCard
				title="Bounce rate"
				className="danger"
				icon={<TbArrowBounce />}
				helperText="Visits that leaves without interacting"
				value={`${data?.visits.toLocaleString()}%` || ''}
				loading={loading}
			/>
		</div>
	);
}
