import Link from 'next/link';
import { useState } from 'react';
import styles from './SideBar.module.css';
import Modal from '../Modal/Modal';

export default function Sidebar() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleNewInvoiceClick = () => {
		setIsModalVisible(true);
	};

	const handleModalClose = () => {
		setIsModalVisible(false);
	};

	return (
		<div className={styles.Sidebar}>
			<button className={styles.btn} onClick={handleNewInvoiceClick}>
				new invoice
			</button>
			{isModalVisible && <Modal onClose={handleModalClose} />}
		</div>
	);
}
