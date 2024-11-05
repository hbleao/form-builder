import s from './styles.module.scss';

import { CardsStatsWrapper } from './components/CardsStatsWrapper';

import { CreateFormBtn } from '@/components';
import { FormCards } from './components/FormCards';

export const HomeTemplate = () => {
	return (
		<div className={s.homeTemplate}>
			<CardsStatsWrapper />
			<div className={s.homeTitle}>
				<h2>Your forms</h2>
			</div>
			<div className={s.forms}>
				<CreateFormBtn />
				<FormCards />
			</div>
		</div>
	);
};
