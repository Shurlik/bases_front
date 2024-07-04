import './App.css';
import {ToastContainer,} from 'react-toastify';
import {RouterProvider,} from "react-router-dom";
import router from './routes/router';

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
      <ToastContainer position="top-left"
      />
    </div>
  );
}

export default App;
