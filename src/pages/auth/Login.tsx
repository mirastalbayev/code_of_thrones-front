import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import {
	Box,
	Grid,
	Checkbox,
	Button,
	CssBaseline,
	TextField,
	FormControl,
	Typography,
	Container,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormControlLabel,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const LoginPage: NextPage = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Image src='/Logo.svg' alt='' width={50} height={52} />
						<Typography component='h1' variant='h5' sx={{ ml: 2 }}>
							INVOICE APP
						</Typography>
					</Box>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email'
							name='email'
							autoComplete='email'
							autoFocus
						/>
						<Grid item xs={12}>
							<FormControl variant='outlined' fullWidth required>
								<InputLabel htmlFor='outlined-adornment-password'>
									Пароль
								</InputLabel>
								<OutlinedInput
									id='outlined-adornment-password'
									type={showPassword ? 'text' : 'password'}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge='end'
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
									label='Password'
								/>
							</FormControl>
						</Grid>
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Запомнить меня'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Авторизация
						</Button>
						<Grid container>
							<Grid item xs sx={{ fontSize: '1rem' }}>
								<Link href='#'>Забыли пароль?</Link>
							</Grid>
							<Grid item sx={{ fontSize: '1rem' }}>
								<Link href='./register'>{'У вас нет аккаунта?'}</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default LoginPage;
