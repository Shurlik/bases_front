import React from 'react';
import {Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ClientCard = ({client}) => {
	const {id, email, is_active, phone, title,short_description} = client;
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
			<Typography
				variant='h6'
			>Контакти:</Typography>
			<Typography>
				{email}
			</Typography>
			<Typography
				gutterBottom>
				{phone}
			</Typography>
			<Typography
				variant='h6'
			>Опис:</Typography>
			<Typography>
				{short_description}
			</Typography>

		</Container>
	);
};

export default ClientCard;
