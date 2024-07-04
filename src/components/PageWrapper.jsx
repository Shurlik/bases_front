import {Container} from "@mui/material";

const PageWrapper = ({children}) => {
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
