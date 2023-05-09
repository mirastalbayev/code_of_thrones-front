import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { FC } from 'react';

const Home: FC = () => {
	return (
		<Layout title='Home' description='test test test'>
			<main
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Image priority src='/Group.png' alt='' width={241} height={342} />
			</main>
		</Layout>
	);
};

export default Home;
