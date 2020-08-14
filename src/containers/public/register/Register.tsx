import React, { useRef, useState } from 'react';
import { makeStyles, createStyles } from '../../../components/imports/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Paper } from '../../../components/imports/paper/paper';
import { useForm } from 'react-hook-form';
import { Typography } from '../../../components/imports/typography/typography';
import { Container, Grid } from '../../../components/imports/grid/grid';
import {
	TextField,
	FormControlLabel,
} from '../../../components/imports/textfield/textfield';
import {
	LockOutlinedIcon,
	Avatar,
} from '../../../components/imports/icons/icons';
import Link from '@material-ui/core/Link';
import { Button } from '../../../components/imports/buttons/buttons';
import { Checkbox } from '../../../components/imports/checkbox/checkbox';
import { useRegisterMutation } from '../../../generated/graphql';
import { useDispatch } from 'react-redux';
import userActions from '../../../redux/user/actions';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.secondary.main,
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(1),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
	})
);

type Inputs = {
	username: string;
	email: string;
	password: string;
	password_repeat: string;
	remember: string;
};

interface Props {}

const Register: React.FC = (props: Props) => {
	const classes = useStyles();
	const { register, handleSubmit, watch, errors } = useForm<Inputs>();
	const [registerUser] = useRegisterMutation();
	const [gqlError, setGqlError] = useState(false);
	const dispatch = useDispatch();
	const password = useRef({});
	password.current = watch('password', '');
	const history = useHistory();

	const setRememberUserData = async (data: any) => {
		await localStorage.setItem('jwtToken', data.register.jwt);
		await localStorage.setItem('user', JSON.stringify(data.register.user));
		dispatch(userActions.registerUser(data.register.jwt));
		history.push('/search');
	};

	const onSubmit = async (data: any) => {
		try {
			const response = await registerUser({
				variables: {
					input: {
						username: data.username,
						email: data.email,
						password: data.password,
					},
				},
			});

			if (data.remember) {
				setRememberUserData(response.data);
			}
		} catch (error) {
			setGqlError(true);
		}
	};
	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Register
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={handleSubmit(onSubmit)}
				>
					<TextField
						variant="outlined"
						margin="normal"
						inputRef={register}
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						inputRef={register}
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						inputRef={register({
							required: 'You must specify a password',
							minLength: {
								value: 8,
								message: 'Password must have at least 8 characters',
							},
						})}
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					{errors.password && (
						<Typography variant="body1">{errors.password.message}</Typography>
					)}
					<TextField
						variant="outlined"
						margin="normal"
						required
						inputRef={register({
							validate: (value) =>
								value === password.current || 'The passwords do not match',
						})}
						fullWidth
						name="password_repeat"
						label="Confirm Password"
						type="password"
						id="password_repeat"
					/>
					{errors.password_repeat && (
						<Typography variant="body1">
							{errors.password_repeat.message}
						</Typography>
					)}
					<FormControlLabel
						control={
							<Checkbox
								inputRef={register}
								name="remember"
								color="primary"
								defaultValue="false"
							/>
						}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Register
					</Button>
					{/* TODO Fix those links */}
					<Grid container>
						<Grid item>
							<Link href="/login" variant="body2">
								{'Already have and account? Sign In'}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default Register;
