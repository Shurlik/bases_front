import {Container} from "@mui/material";
import {useEffect} from "react";

const PageWrapper = ({children, title}) => {
	useEffect(() => {
		document.title = title ? title : 'Привіт!';
	}, []);
	return (
		<Container
			sx={{
				backgroundColor: '#d0d0d0',
				textAlign: 'center',
				paddingTop: '1rem',
				paddingBottom: '2rem',
			}}
		>
			{children}
		</Container>
	);
};

export default PageWrapper;
