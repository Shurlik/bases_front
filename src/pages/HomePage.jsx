import React from 'react';
import {useNavigate} from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import CompanyPage from "./CompanyPage";
import {Typography} from "@mui/material";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<PageWrapper>
			<Typography
				variant='h2'
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
