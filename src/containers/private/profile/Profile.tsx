import React, { useEffect, useState } from 'react';
import { useUserQuery } from '../../../generated/graphql';

interface Props {}

const Profile = (props: Props) => {
	const [userData, setUserData] = useState({});
	const { data, error } = useUserQuery();

	useEffect(() => {
		async function getUserProfile() {
			const { id } = JSON.parse(localStorage.getItem('user'));

			const response = await getUser({
				variables: {
					id: id,
				},
			});
		}

		getUserProfile();
	}, []);

	return <div>Profile page</div>;
};

export default Profile;
