'use client';

import { DesignerContextProvider } from '@/context';
import NextTopLoader from 'nextjs-toploader';

import '../styles/reset.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<NextTopLoader />
				<DesignerContextProvider>{children}</DesignerContextProvider>
			</body>
		</html>
	);
}
