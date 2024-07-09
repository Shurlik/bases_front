import React, {useState} from 'react';
import {
	Box,
	Chip,
	Container,
	IconButton,
	InputAdornment,
	Stack,
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
import MapIcon from '@mui/icons-material/Map';
import MapModal from "../components/MapModal";

export async function loader({params}) {
	const company = await fetchService(`/clients/${params.id}`, 'GET');
	const companyProducts = await fetchService(`/clients/${params.id}/products`, 'GET');
	return {company, companyProducts};
}

const CompanyDetailPage = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
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
		is_active,
		types
	} = company;
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const [filter, setFilter] = useState('');
	const [selectedTypes, setSelectedTypes] = useState([]);

	const [selectedItems, setSelectedItems] = useState([...companyProducts])

	const headers = ['Наіменування',
		"Одиниця виміру",
		"Ціна",
		"Категорія товару",
		"Опис товару"];

	function handleClick(typeId) {
		if (selectedTypes.includes(typeId)) {
			const tmpArr = selectedTypes.filter(e => e !== typeId);
			if(tmpArr.length > 0){
				setSelectedTypes([...tmpArr]);
				const arr = companyProducts.filter(p => tmpArr?.includes(p.product_type_id))
				setSelectedItems([...arr])

			} else {
				setSelectedTypes([])
				setSelectedItems([...companyProducts])
			}
		} else {
			selectedTypes.push(typeId);
			setSelectedTypes([...selectedTypes]);
			const arr = companyProducts.filter(p => selectedTypes?.includes(p.product_type_id))
			setSelectedItems([...arr])
		}
	}

	return (
		<PageWrapper title={title}>
			<Box sx={{marginTop: '.5rem', display: 'flex', alignItems: 'center'}}>
				<BackButton/>
			</Box>
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
				// gutterBottom
			>
				{title}
			</Typography>
			<IconButton
				aria-label='На мапі'
				onClick={() => setModalIsOpen(true)}
				edge={'end'}
				sx={{marginBottom: '1rem'}}
			>
				<MapIcon/>
				<Typography>На мапі</Typography>
			</IconButton>
			<Typography
				paragraph
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
					} : undefined}
				/>
				<Stack
					direction='row'
					spacing={2}
					sx={{margin: '1rem 0'}}
					justifyContent={'center'}
				>
					{JSON.parse(types).map(t => <Chip
						label={t.title}
						variant={selectedTypes?.includes(t.id) ? 'filled' : 'outlined'}
						color='secondary'
						onClick={() => handleClick(t.id)}
						key={t.id}
					/>)}
				</Stack>
				<TableContent
					content={selectedItems.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()))}
					headers={headers}
				/>

			</Box>
			<MapModal
				markerTitle={title}
				isOpen={modalIsOpen}
				onClose={() => setModalIsOpen(false)}
				coords={location ? JSON.parse(location) : undefined}
			/>
		</PageWrapper>
	);
};

export default CompanyDetailPage;
