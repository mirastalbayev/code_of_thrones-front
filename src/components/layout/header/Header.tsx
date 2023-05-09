import Link from 'next/link';
import { FC } from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import {
	styled,
	Button,
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

	const NewInvoiceBtn = styled(Button)({
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
				display: 'flex',
				justifyContent: 'space-around',
				width: 730,
				margin: '0 auto',
				// margin: '77px auto 0',
			}}
		>
			<h1>Room booking</h1>
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
			<NewInvoiceBtn
				sx={{ height: '48px' }}
				variant='contained'
				startIcon={<AddCircleRoundedIcon style={{ fontSize: 35 }} />}
				onClick={handleNewInvoiceClick}
			>
				New Cabinet
			</NewInvoiceBtn>
			{isModalVisible && <Modal onClose={handleModalClose} />}
		</div>
	);
};

export default Header;
