import Link from 'next/link';
import { FC } from 'react';
import { useState } from 'react';
import styles from './Header.module.css';
import Modal from '../Modal/Modal';

const Header: FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleNewInvoiceClick = () => {
		setIsModalVisible(true);
	};

	const handleModalClose = () => {
		setIsModalVisible(false);
	};

	return (
		<div className={styles.header}>
			<button className={styles.btn} onClick={handleNewInvoiceClick}>
				new invoice
			</button>
			{isModalVisible && <Modal onClose={handleModalClose} />}
		</div>
	);
};

export default Header;
