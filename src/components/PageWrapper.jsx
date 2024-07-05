import {Container} from "@mui/material";
import {useEffect} from "react";

const PageWrapper = ({children, title}) => {
	useEffect(() => {
		document.title = title ? title : 'Привіт!';
	}, []);
	return (
		<Container
			sx={{
				backgroundColor: '#d0d0d0', height: '100%', textAlign: 'center', paddingTop: '1rem'
			}}
		>
			{children}
		</Container>
	);
};

export default PageWrapper;
