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
				background: '#373B53',
				borderTopRightRadius: '20px',
				borderBottomRightRadius: '20px',
			}}
		>
			<AdbIcon />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					mb: '24px',
					pt: '24px',
					borderTop: '1px solid #979797',
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
						<Typography textAlign='center'>Logout</Typography>
					</MenuItem>
				</Menu>
			</Box>
		</Box>
	);
}

export default Sidebar;
