import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link href='/'>Invoices</Link>
			<Link href='/invoice'>New Invoice</Link>
		</header>
	);
};

export default Header;
