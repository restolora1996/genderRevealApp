import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: 'Gender Reveal App',
	description: 'Gender Reveal App'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AntdRegistry>{children}</AntdRegistry>
			</body>
		</html>
	);
}
