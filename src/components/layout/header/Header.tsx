import * as React from 'react';
import Link from 'next/link';
import { FC } from 'react';
import AddNewCabinet from "../addNewCabinet/AddNewCabinet";
import { useState } from 'react';
import {
	styled,
	Button,
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const Header: FC = () => {
	const MyAccordion = styled(Accordion)({
		backgroundColor: 'transparent',
		boxShadow: 'none',
		maxHeight: '200px',
		overflow: 'auto',
	});

	const NewCabinetBtn = styled(Button)({
		backgroundColor: '#7c5efb',
		borderRadius: '24px',
		'&:hover': {
			backgroundColor: 'rgba(124, 94, 251, 1)',
		},
	});

	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleNewInvoiceClick = () => {
		setIsModalVisible(true);
	};

	const handleModalClose = () => {
		setIsModalVisible(false);
	};

	return (
		<div
			style={{
				// position: 'fixed',
				// top: 0,
				// left: 0,
				// right: 0,
				display: 'flex',
				justifyContent: 'space-around',
				width: 730,
				height: '80px',
				margin: '50px auto 0',
			}}
		>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<h1>Room booking</h1>
				<Typography variant="subtitle2">There are 7 cabinets in total</Typography>
			</Box>
			<MyAccordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography>Filter by status</Typography>
				</AccordionSummary>
				<AccordionDetails
					style={{
						backgroundColor: '#fff',
					}}
				>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label='Draft'
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label='Pending'
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label='Paid'
						/>
					</FormGroup>
				</AccordionDetails>
			</MyAccordion>
			<NewCabinetBtn
				sx={{ height: '48px' }}
				variant='contained'
				startIcon={<AddCircleRoundedIcon style={{ fontSize: 35 }} />}
				onClick={handleNewInvoiceClick}
			>
				New Cabinet
			</NewCabinetBtn>
			{isModalVisible && <AddNewCabinet onClose={handleModalClose} />}
		</div>
	);
};

export default Header;
