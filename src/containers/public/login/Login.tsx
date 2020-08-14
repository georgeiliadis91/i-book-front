import React, { useState, Dispatch, SetStateAction } from 'react';
import { makeStyles, createStyles } from '../../../components/imports/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
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
import { useLoginMutation } from '../../../generated/graphql';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../../../redux/user/actions';

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
	search: string;
	password: string;
	remember: string;
};
interface Props {
	props: Props;
}

const Login: React.FC = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const { register, handleSubmit, watch, errors } = useForm<Inputs>();
	const [login] = useLoginMutation();
	const [gqlError, setGqlError] = useState(false);

	const setRememberUserData = async (data: any) => {
		await localStorage.setItem('jwtToken', data.login.jwt);
		await localStorage.setItem('user', JSON.stringify(data.login.user));
		dispatch(userActions.signIn(data.login.jwt));
		history.push('/profile');
	};

	const onSubmit = async (data: any) => {
		try {
			const response = await login({
				variables: {
					input: {
						identifier: data.identifier,
						password: data.password,
					},
				},
			});
			// TODO handle temp login with variable
			// TODO and handle localhost login with localStorage
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
					Sign in
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
						id="identifier"
						label="Username"
						name="identifier"
						autoComplete="identifier"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						inputRef={register}
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
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
						Sign In
					</Button>
					{/* TODO Fix those links */}
					<Grid container>
						<Grid item xs>
							<Link href="forgot-password" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="/register" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
				<div>
					{gqlError && (
						<Typography variant="body1">
							There has been an error with your data
						</Typography>
					)}
				</div>
			</div>
		</Container>
	);
};

export default Login;
