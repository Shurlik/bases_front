import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import useSWR from "swr";
import {fetchService} from "../services/fetchService";
import ClientCard from "../components/ClientCard";


const CompanyPage = () => {
	const {data: clients = [], error, isLoading, mutate} = useSWR('/api/clients', () => fetchService('/clients', 'GET'));

	return (
		<Container sx={{marginTop: '2rem'}}>
			<Typography
				variant='h4'
				gutterBottom
			>
				Наші компанії
				<Typography
					paragraph
					gutterBottom
				>
				(Поки так, але коли на головній буде більше контенту - заміниться на посилання на окрему сторінку)
			</Typography>
			</Typography>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{clients.map(client => (
					<Grid item xs={2} sm={4} md={4} key={client.id.toString()}>
						<ClientCard {...{client}} />
					</Grid>
				))}
			</Grid>
			{/*<Box sx={{marginTop: 'auto'}}>*/}
			{/*	<BackButton/>*/}
			{/*</Box>*/}
		</Container>
	);
};

export default CompanyPage;
