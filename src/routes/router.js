import React from "react";
import {createBrowserRouter} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CompanyDetailPage, {loader as companyLoader} from "../pages/CompanyDetailPage";


export default createBrowserRouter([
	{
		path: "/",
		element: <HomePage/>,
		errorElement: <NotFoundPage/>
	},
	// {
	// 	path: "/companies",
	// 	errorElement: <NotFoundPage/>,
	// 	element: <CompanyPage/>
	// },
	{
		path: "/companies/:id",
		errorElement: <NotFoundPage/>,
		element: <CompanyDetailPage/>,
		loader: companyLoader,
	}

	// {
	// 	path: "/login",
	// 	element: <Login/>
	// }
]);
