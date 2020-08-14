import React, { useEffect, useState } from 'react';
import { useUserQuery } from '../../../generated/graphql';
import { Typography } from '../../../components/imports/typography/typography';
import { Grid } from '../../../components/imports/grid/grid';

interface Props {}

const Profile: React.FC<Props> = () => {
	const { id } = JSON.parse(localStorage.getItem('user') as string);
	const { data, error } = useUserQuery({ variables: { id: id } });
	const [userData, setUserData] = useState<any>({});

	useEffect(() => {
		setUserData(data?.user);
	}, [data]);

	return (
		<div>
			<Typography variant="h4">User Profile</Typography>
			<Grid container>
				<Grid item xs={12} md={4}>
					<Typography variant="body1">
						Username: {userData?.username}
					</Typography>
					<Typography variant="body1">Email: {userData?.email}</Typography>
					<Typography variant="body1">
						Confirmed: {userData?.confirmed ? 'yes' : 'no'}
					</Typography>
					<Typography variant="body1">
						Member Since: {userData?.created_at}
					</Typography>
				</Grid>
				<Grid item xs={12} md={8}></Grid>
			</Grid>
		</div>
	);
};

export default Profile;
