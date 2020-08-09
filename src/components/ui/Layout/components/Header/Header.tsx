import React, { useState } from 'react';
import { Theme } from '@material-ui/core/styles';
import { AppBar } from '../../../../imports/appbar/';
import { Toolbar } from '../../../../imports/toolbar/';
import { Typography } from '../../../../imports/typography/';
import { Button, IconButton } from '../../../../imports/buttons/';
import { AccountCircle } from '../../../../imports/icons/';
import { Menu, MenuItem } from '../../../../imports/menu/';
import { createStyles, makeStyles } from '../../../../imports/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	})
);

interface Props {
	isLogged: boolean;
	logout: () => void;
	login: () => void;
}

const Header: React.FC<Props> = ({ isLogged, logout, login }) => {
	const classes = useStyles();

	const [auth, setAuth] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						i-book.gr
					</Typography>
					{isLogged ? (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={logout}>Exit</MenuItem>
							</Menu>
						</div>
					) : (
						<Button color="inherit" onClick={login}>
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
