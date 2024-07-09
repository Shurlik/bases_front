import React from 'react';
import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const TableContent = ({headers, content}) => {
	return (
			<TableContainer component={Paper} sx={{maxHeight: '60vh'}}>
				<Table
					stickyHeader
					sx={{minWidth: 650}}
					aria-label='list'
					size={'small'}
				>
					<TableHead>
						<TableRow>
							{headers.map((header, index) => <TableCell key={index.toString()} align={index === 0 ? 'left' : undefined}>{header}</TableCell>)}
						</TableRow>
					</TableHead>
					<TableBody>
						{content.map((row) => (
							<TableRow
								key={row.title}
								sx={{'&:last-child td, &:last-child th': {border: 0}}}
							>
								<TableCell
									component='th'
									scope='row'
								>
									{row.title}
								</TableCell>
								<TableCell align='center'>{row.unit}</TableCell>
								<TableCell align='center'>{row.price_retail}</TableCell>
								<TableCell align='center'>{row.product_types?.title || row.product_type_id}</TableCell>
								<TableCell align='center'>{row.description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
	);
};

export default TableContent;
