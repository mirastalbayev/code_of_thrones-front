import * as React from 'react';
import Link from 'next/link';
import { FC } from 'react';
// import { useState } from 'react';
import AddNewRoom from "../addNewRoom/AddNewRoom";
import {
	styled,
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

const Header: FC = () => {
	const MyAccordion = styled(Accordion)({
		backgroundColor: 'transparent',
		boxShadow: 'none',
		maxHeight: '200px',
		overflow: 'auto',
	});

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
			<AddNewRoom />
		</div>
	);
};

export default Header;
