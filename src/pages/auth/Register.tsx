import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import {
	Box,
	Grid,
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
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const RegisterPage: NextPage = () => {
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
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete='given-name'
									name='firstName'
									required
									fullWidth
									id='firstName'
									label='Имя'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email'
									name='email'
									autoComplete='email'
								/>
							</Grid>
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
							<Grid item xs={12}>
								<FormControl variant='outlined' fullWidth required>
									<InputLabel htmlFor='outlined-adornment-password'>
										Повторить пароль
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
										label='Confirm Password'
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Регистрация
						</Button>
						<Grid container justifyContent='flex-end'>
							<Grid item sx={{ fontSize: '1rem' }}>
								<Link href='./login'>У вас есть аккаунт?</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default RegisterPage;
