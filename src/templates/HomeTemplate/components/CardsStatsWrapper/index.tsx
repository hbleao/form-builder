import { GetFormStats } from '../../../../../actions/form';

import { StatsCards } from '../StatsCards';

export async function CardsStatsWrapper() {
	const stats = await GetFormStats();

	return <StatsCards loading={false} data={stats} />;
}
