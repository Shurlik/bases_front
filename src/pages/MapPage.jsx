import React from 'react';
import {GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api';
import PageWrapper from "../components/PageWrapper";
import BackButton from "../components/BackButton";
import {Box} from "@mui/material";

const containerStyle = {
	width: '100%',
	height: '70vh'
};

const defValue = {
	lat: 50.4212166888775,
	lng: 30.443657100136612
};

const MapPage = ({coords, markerText}) => {

	return (
		<PageWrapper>
			<Box sx={{marginBottom: '1rem'}}>
				<BackButton/>
			</Box>
			{/*<LoadScript googleMapsApiKey=process.env.REACT_APP_GOOGLE_MAPS_API_KEY>*/}
			{/*	<GoogleMap*/}
			{/*		mapContainerStyle={containerStyle}*/}
			{/*		center={coords ? coords : defValue}*/}
			{/*		zoom={coords ? 18 : 13}*/}
			{/*		// onLoad={(map) => (mapRef.current = map)}*/}
			{/*	>*/}
			{/*		<MarkerF*/}
			{/*			position={coords ? coords : defValue}*/}
			{/*			title={markerText ? markerText : 'Волинська оптова база'}*/}
			{/*		/>*/}
			{/*	</GoogleMap>*/}
			{/*</LoadScript>*/}
		</PageWrapper>
	);
};

export default React.memo(MapPage);
