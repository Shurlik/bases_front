import React, {useState} from 'react';
import {
	Box,
	Container,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
	useMediaQuery,
	useTheme
} from "@mui/material";
import BackButton from "../components/BackButton";
import PageWrapper from "../components/PageWrapper";
import {fetchService} from "../services/fetchService";
import {useLoaderData} from "react-router-dom";
import TableContent from "../components/TableContent";
import ClearIcon from "@mui/icons-material/Clear";

export async function loader({params}) {
	const company = await fetchService(`/clients/${params.id}`, 'GET');
	const companyProducts = await fetchService(`/clients/${params.id}/products`, 'GET');
	return {company, companyProducts};
}

const CompanyDetailPage = () => {
	const {company, companyProducts} = useLoaderData();
	const {
		id,
		title,
		phone,
		email,
		contact_person,
		description,
		address,
		location,
		is_active
	} = company;
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const [filter, setFilter] = useState('');

	const headers = ['Наіменування',
		"Одиниця виміру",
		"Ціна",
		"Категорія товару",
		"Опис товару"];

	return (
		<PageWrapper title={title}>
			<Container
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					gap: {'xs': '1rem', 'md': '3rem'},
					fontSize: {'xs': '.8rem', 'md': '1.3rem'}
				}}
			>
				<Typography
					variant={isSmallScreen ? 'h6' : 'h5'}
				>{email} </Typography>
				<Typography
					variant={isSmallScreen ? 'h6' : 'h5'}
				>{phone}</Typography>
				<Typography
					variant={isSmallScreen ? 'h6' : 'h5'}
				>{contact_person}</Typography>
			</Container>
			<Typography
				variant={isSmallScreen ? 'h4' : 'h2'}
				sx={{fontWeight: 'bold'}}
				gutterBottom
			>
				{title}
			</Typography>

			<Typography
				paragraph
				gutterBottom
			>
				{description}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<TextField
					id='search'
					label='Пошук'
					variant='standard'
					sx={{width: '15rem', margin: '0 auto 1rem'}}
					value={filter}
					onChange={e => setFilter(e.target.value)}
					InputProps={filter.length > 0 ? {
						endAdornment: <InputAdornment position='end'>
							<IconButton
								aria-label='clear'
								onClick={() => setFilter('')}
								edge='end'
							>
								<ClearIcon/>
							</IconButton>
						</InputAdornment>,
					} : undefined }
				/>
				<TableContent
					content={companyProducts.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()))}
					headers={headers}
				/>
				<Box sx={{marginTop: 'auto'}}>
					<BackButton/>
				</Box>
			</Box>
		</PageWrapper>
	);
};

export default CompanyDetailPage;
