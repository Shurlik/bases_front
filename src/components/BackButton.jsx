import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {useNavigate} from "react-router-dom";

const BackButton = ({iconColor, bgColor, onClick, size}) => {
	const navigate = useNavigate();

	function backHandler() {
		navigate(-1);
	}

	return (
		<ArrowLeftIcon
			onClick={onClick ? onClick : backHandler}
			sx={{
				color: `${iconColor ? iconColor : '#000'}`,
				marginTop: '5rem',
				backgroundColor: `${bgColor ? bgColor : '#c0c0c0'}`,
				width: `${size ? size : '5rem'}`,
				height: `${size ? size : '5rem'}`,
				borderRadius: '1rem',
				opacity: .7,
				textAlign: 'center',
				cursor: 'pointer',
				'&:hover': {
					opacity: 1
				}
			}}
		/>
	);
};

export default BackButton;
