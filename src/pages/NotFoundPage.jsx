import React from 'react';
import {Button, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const NotFoundPage = () => {

	return (
		<Container sx={{textAlign: 'center'}}>
			<Typography variant='h3'>
				Sorry, no one here
			</Typography>
			<Link to={`/`}><Button
				sx={{marginTop: '2rem', color: 'white', textDecoration: 'none'}}
				variant='contained'
			>На главную</Button></Link>
		</Container>
	);
};

export default NotFoundPage;
