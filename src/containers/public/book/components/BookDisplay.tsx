import React from 'react';
import { IBook } from '../../../../entinties/book';
import {
	makeStyles,
	createStyles,
} from '../../../../components/imports/styles/styles';

import { Theme } from '@material-ui/core/styles';
import { Grid } from '../../../../components/imports/grid/grid';
import { Typography } from '../../../../components/imports/typography/typography';

interface Props {
	book: IBook;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
	})
);

const BookDisplay: React.FC<Props> = ({ book }) => {
	const classes = useStyles();

	const { ID, Title, Description, PublishDate, Excerpt, PageCount } = book;
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<Typography variant="h4">{Title}</Typography>
				</Grid>
				<Grid item xs={12} md={8}>
					{Description}
				</Grid>
			</Grid>
		</div>
	);
};

export default BookDisplay;
