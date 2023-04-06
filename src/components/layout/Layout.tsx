import { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Sidebar from './sidebar/SideBar';

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description,
}) => {
	return (
		<Meta title={title} description={description}>
			<Sidebar />
			<Header />
			<main>{children}</main>
		</Meta>
	);
};

export default Layout;
