import React from 'react';
import { makeStyles, createStyles } from '../../imports/styles/styles';

import { Theme } from '@material-ui/core/styles';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'inline-block',
			position: 'relative',
			width: 20,
			height: 20,
			marginRight: 5,
			'& > div': {
				boxSizing: 'border-box',
				display: 'block',
				position: 'absolute',
				width: 20,
				height: 20,
				border: `4px solid ${
					theme.palette.type === 'dark'
						? theme.palette.primary.light
						: theme.palette.primary.dark
				}`,
				borderRadius: '50%',
				animation: '$lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
				borderColor: `${
					theme.palette.type === 'dark'
						? theme.palette.primary.light
						: theme.palette.primary.dark
				} transparent transparent transparent`,
			},
			'& > div:nth-child(1)': {
				animationDelay: '-0.45s',
			},
			'& > div:nth-child(2)': {
				animationDelay: '-0.3s',
			},
			'& > div:nth-child(3)': {
				animationDelay: '-0.15s',
			},
		},
		'@keyframes lds-ring': {
			'0%': {
				transform: 'rotate(0deg)',
			},
			'100%': {
				transform: 'rotate(360deg)',
			},
		},
	})
);

const Loading = (props: Props) => {
	return (
		<div className="loader-wrapper loader-wrapper--4">
			<div className="loader loader--4">
				<div className="circle"></div>
			</div>
		</div>
	);
};

export default Loading;
