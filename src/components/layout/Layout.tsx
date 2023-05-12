import { FC, PropsWithChildren, useState } from 'react';
import Header from './header/Header';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Sidebar from './sidebar/SideBar';
import Invoices from '@/components/layout/Invoices/Invoices';
import Modal from '@/components/layout/addNewCabinet/AddNewCabinet';
import {
	Box,
	Grid
} from '@mui/material';

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
			<Box sx={{ flexGrow: 1 }}>
				<Grid container>
						<Grid xs={1}>
								<Sidebar />
						</Grid>
						<Grid container xs={11}>
							<Grid xs={12}>
								<Header toggleModal={toggleModal} />
							</Grid>
							<Grid xs={12}>
								{children}
								{isModalOpen && <Modal toggleModal={toggleModal} />}
							</Grid>
						</Grid>
				</Grid>
			</Box>
		</Meta>
	);
};

{/* <Invoices /> */}

export default Layout;
