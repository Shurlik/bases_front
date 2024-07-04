import {Container} from "@mui/material";
import CircularProgress, {
} from '@mui/material/CircularProgress';

const Loader = ({props}) => {
	return (
		<Container sx={{textAlign: 'center', padding: '3rem'}}>
			<svg
				width={0}
				height={0}
			>
				<defs>
					<linearGradient
						id="my_gradient"
						x1="0%"
						y1="0%"
						x2="0%"
						y2="100%"
					>
						<stop
							offset="0%"
							stopColor="pink"
						/>
						<stop
							offset="33%"
							stopColor="lightblue"
						/>
						<stop
							offset="66%"
							stopColor="lightgreen"
						/>
						<stop
							offset="100%"
							stopColor="yellow"
						/>
					</linearGradient>
				</defs>
			</svg>
			<CircularProgress sx={{'svg circle': {stroke: 'url(#my_gradient)'}}}/>
		</Container>
	);
};

export default Loader;
