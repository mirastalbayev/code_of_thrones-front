import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}></div>
		</header>
	);
};

export default Header;
