import React from 'react';
import { makeStyles, createStyles } from '../../imports/styles/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Paper } from '../../imports/paper/paper';

import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 1,
			padding: theme.spacing(3),
		},
	})
);
type Inputs = {
	search: string;
};

interface Props {}

const Search = (props: Props) => {
	const classes = useStyles();
	const { register, handleSubmit, watch, errors } = useForm<Inputs>();
	// TODO Make api call for searchin DB , send user to result page
	const onSubmit = (data: any) => console.log(data);

	return (
		<Paper className={classes.root} elevation={1}>
			Search
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="search" ref={register({ required: true })} />
				{/* errors will return when field validation fails  */}
				{errors.search && <span>This field is required</span>}

				<input type="submit" />
			</form>
		</Paper>
	);
};

export default Search;
