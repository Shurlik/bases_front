import React from 'react';
import {Box, Chip, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ClientCard = ({client}) => {
	const {id, email, is_active, phone, title, short_description, types} = client;
	const navigate = useNavigate();
	
	function detailHandler() {
		navigate(`/companies/${id}`);
	}

	return (
		<Container
			onClick={detailHandler}
			sx={{
				border: '1px solid #fff',
				borderRadius: '.5rem',
				textAlign: 'left',
				cursor: 'pointer',
				padding: '.5rem',
				backgroundColor: '#ffffff55',
				"&:hover": {
					backgroundColor: '#ffffffbb'
				}
			}}
		>
			<Typography
				variant='h5'
				gutterBottom
			>
				{title}
			</Typography>
			<Typography>
				{short_description}

			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '.5rem',
					marginTop: '1rem'
				}}
			>
				{types && JSON.parse(types).map(t => <Chip
					label={t.title}
					key={t.id}
					size='small'
					variant='outlined'
				/>)}
			</Box>
		</Container>
	);
};

export default ClientCard;
