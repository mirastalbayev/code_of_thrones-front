import Link from 'next/link';
import styles from './SideBar.module.css';

export default function Sidebar() {
	return (
		<nav className={styles.nav}>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
			<Link href='/contact'>Contact</Link>
		</nav>
	);
}
