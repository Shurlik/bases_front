import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {useNavigate} from "react-router-dom";

const BackButton = ({iconColor, bgColor, onClick, size}) => {
	const navigate = useNavigate();

	function backHandler() {
		navigate('/');
	}

	return (
		<ArrowLeftIcon
			onClick={onClick ? onClick : backHandler}
			sx={{
				color: `${iconColor ? iconColor : '#000'}`,
				backgroundColor: `${bgColor ? bgColor : '#fff'}`,
				width: `${size ? size : '5rem'}`,
				height: `${size ? size : '2rem'}`,
				borderRadius: '1rem',
				opacity: .7,
				textAlign: 'center',
				cursor: 'pointer',
				marginTop: '2rem',
				'&:hover': {
					opacity: 1
				}
			}}
		/>
	);
};

export default BackButton;
