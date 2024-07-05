import React from 'react';
import {Container, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import useSWR from "swr";
import {fetchService} from "../services/fetchService";
import ClientCard from "../components/ClientCard";


const CompanyPage = () => {
	const {data: clients = [], error, isLoading, mutate} = useSWR('/api/clients', () => fetchService('/clients', 'GET'));
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Container sx={{marginTop: {'xs': '.8rem', 'md':'2rem'}}}>
			<Typography
				variant={isSmallScreen ? 'h5' : 'h4'}
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
			<Grid
				container
				spacing={{xs: 1, sm:2, md: 3}}
				columns={{xs: 2, sm: 8, md: 12}}
			>
				{clients.map(client => (
					<Grid
						item
						xs={2}
						sm={4}
						md={4}
						key={client.id.toString()}
					>
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
