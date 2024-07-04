import React from "react";
import {createBrowserRouter} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../pages/AdminPage";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Content from "../pages/Content";
import AccessManagement from "../pages/AccessManagement";
import Documents from "../pages/Documents";
import Transfers from "../pages/Transfers";
import Codes from "../pages/Codes";
import Dashboard from "../pages/Dashboard";
import Admins from "../pages/Admins";
import Users from "../pages/Users";
import Currency from "../pages/Currency";
import Assets from "../pages/Assets";
import UserDetails, {loader as userLoader} from "../pages/UserDetails";
import AdminDetails, {loader as adminLoader} from "../pages/AdminDetails";
import CompanyDetails, {loader as companyLoader} from "../pages/CompanyDetails";
import Companies from "../pages/Companies";

export default createBrowserRouter([
	{
		path: "/",
		element: <PrivateRoute component={AdminPage}/>,
		errorElement: <NotFound/>,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard/>,
			},
			{
				path: "/admins",
				element: <Admins/>
			},
			{
				path: "/users",
				element: <Users/>
			},
			{
				path: "/companies/",
				element: <Companies/>
			},
			{
				path: "/users/:userId",
				element: <UserDetails/>,
				loader: userLoader,
			},
			{
				path: "/companies/:userId",
				element: <CompanyDetails/>,
				loader: companyLoader,
			},
			{
				path: "/admins/:adminId",
				element: <AdminDetails/>,
				loader: adminLoader,
			},
			{
				path: "/currencies",
				element: <Currency/>
			},
			{
				path: "/assets",
				element: <Assets/>
			},
			{
				path: "/codes",
				element: <Codes/>
			},
			{
				path: "/transfers",
				element: <Transfers/>
			},
			{
				path: "/documents",
				element: <Documents/>
			},
			{
				path: "/management",
				element: <AccessManagement/>
			},
			{
				path: "/content",
				element: <Content/>
			},
		]
	},
	{
		path: "/login",
		element: <Login/>
	}
]);
