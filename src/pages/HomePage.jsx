import React from 'react';
import {useNavigate} from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import CompanyPage from "./CompanyPage";
import Header from "../components/Header";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<PageWrapper title={'Головна'}>
			<Header/>
			<CompanyPage/>
		</PageWrapper>
	);
};

export default HomePage;
