
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import UserLayout from '../layouts/UserLayout';
import DashboardLayout from '../layouts/DashboardLayout';

import Home from '../pages/Home';
import Plans from '../pages/Plans';
import Cart from '../pages/Cart';

import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import PreCheckout from '../payment/PreChekout';
import Success from '../payment/Success';
import Users from '../Dashboard/Users';
import Services from '../Dashboard/Services';
import UserDetails from "../Dashboard/Forms/UserForm";
import ServiceDetails from "../Dashboard/Forms/ServiceForm"
import NewUserForm from "../Dashboard/Forms/NewUserForm"
import NewServiceForm from "../Dashboard/Forms/NewServiceForm"

export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: (
                <UserLayout>
                    <Outlet />

                </UserLayout>
            ),
            children: [
                { element: <Navigate to="/home" />, index: true },
                { path: "/home", element: <Home /> },
                { path: '/plans/:service', element: <Plans /> },

                { path: "/cart", element: <Cart /> },
            ]
        },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/checkout", element: <PreCheckout /> },
        { path: "/success", element: <Success /> },
        {
            path: "dashboard", element:
                (
                    <DashboardLayout>
                        <Outlet />
                    </DashboardLayout>
                ),
            children: [

                { element: <Navigate to="/dashboard/users" />, index: true },
                { path: 'users',
                children:[
                    {element:<Users />,index:true},
                    {path:'new',element:<NewUserForm />}
                ]
                },
                { path: 'services', children:[ 
                    {element: <Services />,index:true},
                    {path:'new',element:<NewServiceForm/>}
                ] },
                {path:'userdetail',element:<UserDetails/>},
                {path:'servicedetail',element:<ServiceDetails/>}
            ]

        },
        // {path:"/checkout",element:<Checkout/>},
        // {
        //   element: (
        //     <DashboardLayout>
        //       <Suspense>
        //         <Outlet />
        //       </Suspense>
        //     </DashboardLayout>
        //   ),
        //   children: [
        //     { element: <IndexPage />, index: true },
        //     { path: 'user', element: <UserPage /> },
        //     { path: 'products', element: <ProductsPage /> },
        //     { path: 'blog', element: <BlogPage /> },
        //   ],
        // },
        // {
        //   path: '/404',
        //   element: <Page404 />,
        // },
        // {
        //   path: '*',
        //   element: <Navigate to="/home" replace />,
        // },
    ]);

    return routes;
}