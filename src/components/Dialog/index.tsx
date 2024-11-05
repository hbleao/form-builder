import { IoClose } from 'react-icons/io5';

import s from './styles.module.scss';

export type DialogProps = {
	isOpen: boolean;
	title: string;
	description?: string;
	children: React.ReactNode;
	handleCloseModal: () => void;
};

export const Dialog = ({
	title,
	description,
	isOpen,
	children,
	handleCloseModal,
}: DialogProps) => {
	return (
		<>
			{isOpen && (
				<>
					<div className={s.overlay} />
					<div className={s.dialog}>
						<div className={s.header}>
							<div className={s.title}>
								<strong>{title}</strong>
								<IoClose onClick={handleCloseModal} />
							</div>
							<p className={s.description}>{description}</p>
						</div>
						<div className={s.content}>{children}</div>
					</div>
				</>
			)}
		</>
	);
};
