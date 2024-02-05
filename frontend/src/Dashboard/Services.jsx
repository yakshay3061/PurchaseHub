import React, { useEffect, useState } from 'react'
import Datatable from './Datatable'
import { Paper } from '@mui/material';
import { Navigate, useNavigate } from 'react-router';
import api from '../api/axios';

const userColumns = [
    { field: "id", headerName: "ServiceId", width: 250 },
    {
        field: "servicename",
        headerName: "Service Name",
        width: 170
    },
    {
        field: "plan",
        headerName: "Plan",
        width: 150,
        renderCell: (params) => {
            return (
                <Paper sx={{ background: (theme) => theme.palette.common['grey'], color: (theme) => theme.palette.primary['main'], p: 1 }} elevation={1}>{params.row.plan}</Paper>
            );
        }
    },
    {
        field:'description',
        headerName:'Description',
        width:220,
    },
    {
        field: "price",
        headerName: "Price",
        width: 130,
    },
];

const servicesAll = [
    {
        "id": "6554ba9fb6652e61bdc01ce8",
        "productId": "prod_P0fHy7OZwYPVKZ",
        "servicename": "Kubernets",
        "description": "1GB RAM , 2 Core CPU",
        "plan": "Basic",
        "priceId": "price_1OCdwXSCZn81mFB25Dni9AYj",
        "duration": "12 days",
        "__v": 0
    },
    {
        "id": "6554bc6a845290a26d612ad5",
        "productId": "prod_P0jrXpBOdITFEL",
        "servicename": "Kubernets",
        "description": "2GB RAM , 2 Core CPU",
        "plan": "Standard",
        "priceId": "price_1OCiO8SCZn81mFB2ra2SxQsD",
        "duration": "24 days",
        "__v": 0
    },
    {
        "id": "6554d38b315c13bbf1cbe44c",
        "productId": "prod_P0lTCfmmEEaEsw",
        "servicename": "Docker",
        "description": "Number of concurrent builds : 5",
        "plan": "Basic",
        "price": 5,
        "priceId": "price_1OCjwbSCZn81mFB2Wt6raEio",
        "duration": "3",
        "__v": 0
    },
    {
        "id": "6556260cb15edce354fe3722",
        "productId": "prod_P18l28pAiJVEwl",
        "servicename": "Docker",
        "description": "Number of concurrent builds : 20",
        "plan": "Standard",
        "price": 35,
        "priceId": "price_1OD6UISCZn81mFB2oIdFagkj",
        "duration": "halfyearly",
        "__v": 0
    },
    {
        "id": "6556264db15edce354fe3724",
        "productId": "prod_P18mGEZkMYmkQq",
        "servicename": "Docker",
        "description": "Number of concurrent builds : 20",
        "plan": "Standard",
        "price": 65,
        "priceId": "price_1OD6VLSCZn81mFB21iS8YZOt",
        "duration": "yearly",
        "__v": 0
    }
]



function Services() {

    const navigate = useNavigate();
    const [services, setServices] = useState([]);


    const fetchServices = () => {

        api.get('/api/servicesAll').then(res => {


            if (res.status === 500) {

                console.log(res.error.message);

            }
            else {
                const data = res.data.map(s => {

                    return { ...s, id: s._id };

                });
                console.log('services api called');

                setServices(data);
            }

        }).catch(err => console.log(err.message));

    }

    useEffect(() => {

        const token = sessionStorage.getItem('access-token');

        // if (!token.isAdmin && !token.isSuperAdmin) {


        //     navigate('/home');


        // }


        fetchServices();




    }, [])

    return (

        <>{services && <Datatable tableField={userColumns} tableData={services} fetchData={fetchServices} Rpage={"/dashboard/servicedetail"} title={"Service"} />}
        </>
    )
}

export default Services