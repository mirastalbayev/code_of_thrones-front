import Layout from '@/components/layout/Layout';
import { FC } from 'react';
import styles from './Home.module.css';

const Home: FC = () => {
	return (
		<Layout title='Home' description='test test test'>
			<main className={styles.main}>
				<h1>Get started by editing</h1>
			</main>
		</Layout>
	);
};

export default Home;
