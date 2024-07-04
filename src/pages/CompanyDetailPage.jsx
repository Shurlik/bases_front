import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import BackButton from "../components/BackButton";
import PageWrapper from "../components/PageWrapper";
import {fetchService} from "../services/fetchService";
import {useLoaderData} from "react-router-dom";
import TableContent from "../components/TableContent";

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

	const headers = ['Наіменування',
		"Одиниця виміру",
		"Ціна",
		"Категорія товару",
		"Опис товару"];

	return (
		<PageWrapper>
			<Container sx={{display: 'flex', justifyContent: 'center',gap: '5rem', fontSize: '1.3rem'}}>
				<Typography
					variant='h5'
				>{email} </Typography>
				<Typography
					variant='h5'
				>{phone}</Typography>
				<Typography
					variant='h5'
				>{contact_person}</Typography>
			</Container>
			<Typography
				variant='h2'
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
				<TableContent
					content={companyProducts}
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
const tst = {
	"id": 2,
	"created_at": "2024-06-15T20:13:55.264941+00:00",
	"client_id": 1,
	"title": "9ТрубочкаИриска1,5кг, шт",
	"is_available": true,
	"is_sale": false,
	"product_type_id": 1,
	"unit": "шт",
	"is_active": true,
	"price_retail": 0,
	"price_wholesale": 0,
	"description": null
};
