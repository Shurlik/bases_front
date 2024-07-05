import React from 'react';
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";

const Header = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box sx={{
			boxShadow: '0 4px 8px -7px #00000099',
			paddingBottom: '.5rem',
			marginLeft: '-24px',
			marginRight: '-24px'
		}}>
			<Typography
				variant={isSmallScreen ? 'h3' :'h2'}
				sx={{fontWeight: 'bold'}}
			>
				Оптова база
			</Typography>
			<Typography
				variant={isSmallScreen ? 'h6' :'h5'}
				gutterBottom
			>
				Місце де Ви можете знайти багато цікавого по гарній ціні!
			</Typography>
		</Box>
	);
};

export default Header;
