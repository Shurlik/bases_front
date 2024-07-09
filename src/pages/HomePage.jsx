import React from 'react';
import {useNavigate} from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import CompanyPage from "./CompanyPage";
import Header from "../components/Header";
import {GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import Loader from "../components/Loader";

const containerStyle = {
	width: '100%',
	height: '30rem'
};

const defValue = {
	lat: 50.4212166888775,
	lng: 30.443657100136612
};

const HomePage = () => {
	const navigate = useNavigate();
	const {isLoaded} = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API
	});

	return (
		<PageWrapper title={'Головна'}>
			<Header/>
			<CompanyPage/>
			{isLoaded ? <GoogleMap
				mapContainerStyle={containerStyle}
				center={defValue}
				zoom={12}
			>
				<MarkerF
					position={defValue}
					title={'Волинська база'}
				/>
			</GoogleMap> : <Loader/>}
		</PageWrapper>
	);
};

export default HomePage;
