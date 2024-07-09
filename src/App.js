import './App.css';
import {ToastContainer,} from 'react-toastify';
import {RouterProvider,} from "react-router-dom";
import router from './routes/router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className='app'>
			<RouterProvider router={router}/>
			<ToastContainer
				position='top-right'
				autoClose={3000}
			/>
		</div>
	);
}

export default App;
