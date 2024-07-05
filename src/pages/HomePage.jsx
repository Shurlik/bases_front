import React from 'react';
import {useNavigate} from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import CompanyPage from "./CompanyPage";
import {Typography, useMediaQuery, useTheme} from "@mui/material";

const HomePage = () => {
	const navigate = useNavigate();
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<PageWrapper>
			<Typography
				variant={isSmallScreen ? 'h3' :'h2'}
				gutterBottom
			>
				Здоровенькі були!
			</Typography>
			<Typography
				variant='p'
				gutterBottom
			>
				Тут якийсь опис, реклама, промо товарів
			</Typography>
			<CompanyPage/>
		</PageWrapper>
	);
};

export default HomePage;
