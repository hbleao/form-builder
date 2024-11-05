import type React from 'react';

export type StatsCardProps = {
	title: string;
	className: 'info' | 'success' | 'warn' | 'danger';
	icon: React.ReactNode;
	helperText: string;
	value: string;
	loading: boolean;
};
