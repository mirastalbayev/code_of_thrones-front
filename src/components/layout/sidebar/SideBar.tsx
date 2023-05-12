import * as React from 'react';
import {
	Box,
	IconButton,
	Typography,
	Menu,
	Avatar,
	MenuItem,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';

function Sidebar() {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box
			position='fixed'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				width: 100,
				height: '100%',
				background: '#264893',
				borderTopLeftRadius: '16px',
				borderTopRightRadius: '16px',
				borderBottomRightRadius: '16px',
			}}
		>
			<Image
				priority
				src='/Logo.svg'
				alt=''
				width={100}
				height={101}
			/>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					mb: '24px',
					pt: '24px',
					borderTop: '1px solid #F16300',
				}}
			>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
				</IconButton>
				<Menu
					sx={{ ml: '90px' }}
					id='menu-appbar'
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					<MenuItem onClick={handleCloseUserMenu}>
						<Typography textAlign='center'>Profile</Typography>
					</MenuItem>
					<MenuItem onClick={handleCloseUserMenu}>
						<Typography textAlign='center'>Reservation</Typography>
					</MenuItem>
					<MenuItem onClick={handleCloseUserMenu}>
						<Typography textAlign='center'>Exit</Typography>
					</MenuItem>
				</Menu>
			</Box>
		</Box>
	);
}

export default Sidebar;
