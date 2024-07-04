import React from 'react';
import {Container, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

const TableContainer = ({headers, content}) => {
	return (
		<Container>
			<TableContainer component={Paper}>
				<Table
					sx={{minWidth: 650}}
					aria-label='simple table'
				>
					<TableHead>
						<TableRow>
							{headers.map((header, index) => <TableCell align={index === 0 ? 'left' : undefined}>{header}</TableCell>)}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{'&:last-child td, &:last-child th': {border: 0}}}
							>
								<TableCell
									component='th'
									scope='row'
								>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.calories}</TableCell>
								<TableCell align='right'>{row.fat}</TableCell>
								<TableCell align='right'>{row.carbs}</TableCell>
								<TableCell align='right'>{row.protein}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default TableContainer;
