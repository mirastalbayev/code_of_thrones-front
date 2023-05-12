import * as React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import {
	Box,
	Card,
	CardContent,
	Typography,
} from '@mui/material';

const Home: FC = () => {
	return (
		<Layout title='Home' description='test test test'>
			<main
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: 730,
					margin: '50px auto 0',
				}}
			>
				{/* <Image priority src='/Group.png' alt='' width={241} height={342} /> */}
				<Card sx={{ display: 'flex', padding: '15px', maxWidth: '730px', marginBottom: '30px' }}>
					<Image
						priority
						src='/cabinet.png'
						alt=''
						width={250}
						height={142}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography component="div" variant="h5">
								№ 303
							</Typography>
							<Typography variant="subtitle1" color="text.secondary" component="div">
								Mac Miller
							</Typography>
						</CardContent>
					</Box>
				</Card>
				<Card sx={{ display: 'flex', padding: '15px', maxWidth: '730px', marginBottom: '30px' }}>
					<Image
						priority
						src='/cabinet.png'
						alt=''
						width={250}
						height={142}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography component="div" variant="h5">
								№ 303
							</Typography>
							<Typography variant="subtitle1" color="text.secondary" component="div">
								Mac Miller
							</Typography>
						</CardContent>
					</Box>
				</Card>
				<Card sx={{ display: 'flex', padding: '15px', maxWidth: '730px', marginBottom: '30px'}}>
					<Image
						priority
						src='/cabinet.png'
						alt=''
						width={250}
						height={142}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography component="div" variant="h5">
								№ 303
							</Typography>
							<Typography variant="subtitle1" color="text.secondary" component="div">
								Mac Miller
							</Typography>
						</CardContent>
					</Box>
				</Card>
				<Card sx={{ display: 'flex', padding: '15px', maxWidth: '730px', marginBottom: '30px'}}>
					<Image
						priority
						src='/cabinet.png'
						alt=''
						width={250}
						height={142}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography component="div" variant="h5">
								№ 303
							</Typography>
							<Typography variant="subtitle1" color="text.secondary" component="div">
								Mac Miller
							</Typography>
						</CardContent>
					</Box>
				</Card>
				<Card sx={{ display: 'flex', padding: '15px', maxWidth: '730px', marginBottom: '30px'}}>
					<Image
						priority
						src='/cabinet.png'
						alt=''
						width={250}
						height={142}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography component="div" variant="h5">
								№ 303
							</Typography>
							<Typography variant="subtitle1" color="text.secondary" component="div">
								Mac Miller
							</Typography>
						</CardContent>
					</Box>
				</Card>
				<Card sx={{ display: 'flex', padding: '15px', maxWidth: '730px', marginBottom: '30px'}}>
					<Image
						priority
						src='/cabinet.png'
						alt=''
						width={250}
						height={142}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography component="div" variant="h5">
								№ 303
							</Typography>
							<Typography variant="subtitle1" color="text.secondary" component="div">
								Mac Miller
							</Typography>
						</CardContent>
					</Box>
				</Card>
			</main>
		</Layout>
	);
};

export default Home;
