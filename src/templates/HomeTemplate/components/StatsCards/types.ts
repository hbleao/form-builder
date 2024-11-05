import type { GetFormStats } from '../../../../../actions/form';

export type StatsCardsProps = {
	data?: Awaited<ReturnType<typeof GetFormStats>>;
	loading: boolean;
};
