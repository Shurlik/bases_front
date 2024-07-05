import React from 'react';
import {Box, Modal} from "@mui/material";
import {GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import Loader from "./Loader";

const containerStyle = {
	width: '100%',
	height: '70vh'
};

const defValue = {
	lat: 50.4212166888775,
	lng: 30.443657100136612
};

const MapModal = ({coords, markerTitle = 'Волинська оптова база', isOpen, onClose}) => {
	const {isLoaded} = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API
	});

	return (
		<Modal
			open={isOpen}
			onClose={onClose}
			aria-labelledby={markerTitle}
			sx={{paddingLeft: '2rem', paddingRight: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
		>
			<Box sx={{width: '100%'}}>
				{isLoaded ? <GoogleMap
					mapContainerStyle={containerStyle}
					center={coords ? coords : defValue}
					zoom={coords ? 18 : 13}
				>
					<MarkerF
						position={coords ? coords : defValue}
						title={markerTitle}
					/>
				</GoogleMap> : <Loader/>}
			</Box>
		</Modal>
	);
};

export default React.memo(MapModal);
