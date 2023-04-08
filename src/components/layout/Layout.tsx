import { FC, PropsWithChildren, useState } from 'react';
import Header from './header/Header';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Sidebar from './sidebar/SideBar';
import Invoices from '@/components/layout/Invoices/Invoices';
import Modal from '@/components/layout/Modal/Modal';

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<Meta title={title} description={description}>
			<div>
				<Sidebar toggleModal={toggleModal} />
				<Header />
				<Invoices />
			</div>
			{isModalOpen && <Modal toggleModal={toggleModal} />}
		</Meta>
	);
};

export default Layout;
