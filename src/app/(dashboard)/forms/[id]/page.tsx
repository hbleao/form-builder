import { FormLinkShare, VisitBtn } from '@/components';
import { FaWpforms } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import { LuView } from 'react-icons/lu';
import { TbArrowBounce } from 'react-icons/tb';

import { GetFormById } from '../../../../../actions/form';

import s from './page.module.scss';

import { StatsCard } from '@/templates/HomeTemplate/components/StatCard';
import { SubmissionList } from './SubmissionList';

export const BuilderFormPage = async ({
	params,
}: { params: { id: string } }) => {
	const form = await GetFormById(Number(params.id));

	if (!form) {
		throw new Error('Form not found!');
	}

	const { visits, submissions } = form;

	let submissionRate = 0;

	if (visits > 0) {
		submissionRate = (submissions / visits) * 100;
	}

	const bounceRate = 100 - submissionRate;

	return (
		<>
			<div className={s.buildFormPage}>
				<div className={s.buildFormPageHeader}>
					<h1>{form.name}</h1>
					<div className={s.visitBtn}>
						<VisitBtn sharedUrl={form.sharedUrl} />
					</div>
				</div>
				<div>
					<FormLinkShare sharedUrl={form.sharedUrl} />
				</div>
			</div>
			<div className={s.statsCards}>
				<StatsCard
					title="Total visits"
					className="info"
					icon={<LuView />}
					helperText="All time form visits"
					value={form?.visits.toLocaleString() || ''}
					loading={false}
				/>

				<StatsCard
					title="Total submissions"
					className="warn"
					icon={<FaWpforms />}
					helperText="All time form submissions"
					value={form.submissions.toLocaleString() || ''}
					loading={false}
				/>

				<StatsCard
					title="Submissions rate"
					className="success"
					icon={<HiCursorClick />}
					helperText="Visits that result in form submission"
					value={`${submissionRate.toLocaleString()}%` || ''}
					loading={false}
				/>

				<StatsCard
					title="Bounce rate"
					className="danger"
					icon={<TbArrowBounce />}
					helperText="Visits that leaves without interacting"
					value={`${bounceRate.toLocaleString()}%` || ''}
					loading={false}
				/>
			</div>
			<div className={s.formTable}>
				<h1>Submissions</h1>
				<SubmissionList id={params.id} />
			</div>
		</>
	);
};

export default BuilderFormPage;
