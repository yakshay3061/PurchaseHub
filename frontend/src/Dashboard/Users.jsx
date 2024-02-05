import React, { useEffect, useState } from 'react'
import Datatable from './Datatable'
import { useNavigate } from 'react-router';
import api from '../api/axios';

const userColumns = [
    { field: "id", headerName: "userId", width: 250 },
    {
        field: "name",
        headerName: "Name",
        width: 170
    },
    {
        field: "email",
        headerName: "Email",
        width: 170,
    },

    {
        field: "isAdmin",
        headerName: "isAdmin",
        width: 150,
    },
    {
        field: "isSuperAdmin",
        headerName: "isSuperAdmin",
        width: 200,
    },

];

const userRows = [
    {
        "id": "65532e8c774e0cff374f8258",
        "name": "tamwik",
        "email": "abcdef@gmail.com",
        "password": "$2b$10$wK2egvQ7I1cqOrBr8pZIyuQWUbI.5fMHJKkZs8YrGBwUWw6kifqNG",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-14T08:23:40.803Z",
        "updatedAt": "2023-11-14T08:23:40.803Z",
        "__v": 0
    },
    {
        "id": "65539fc4c71e7df991f8027c",
        "name": "hello",
        "email": "helloworld@gmail.com",
        "password": "$2b$10$c5y.CNJn0qXEjVKtoGQ1tOEqo2HS2IK3KrKmFeaRHSWdIDUkXd1p6",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-14T16:26:44.506Z",
        "updatedAt": "2023-11-14T16:26:44.506Z",
        "__v": 0
    },
    {
        "id": "6553a42fc7b08448b003c76b",
        "name": "superAdmin",
        "email": "superadmin@gmail.com",
        "password": "$2b$10$I49UX1QPB5xgk2wn1B3nc.nSx1FGzKSK/cQ28pEUudiFHdW2Gmapm",
        "isAdmin": false,
        "isSuperAdmin": true,
        "createdAt": "2023-11-14T16:45:35.510Z",
        "updatedAt": "2023-11-14T16:45:35.511Z",
        "__v": 0
    },
    {
        "id": "6553ac73dba575119eedeff4",
        "name": "haaris",
        "email": "haaris@gmail.com",
        "password": "$2b$10$J45J7rChPAzJ1rikaSGXIukSMql5/HK5Kq8TPKkNtpwcY6KoYEvKy",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-14T17:20:51.736Z",
        "updatedAt": "2023-11-14T17:20:51.736Z",
        "__v": 0
    },
    {
        "id": "6554b392f433dfd3ffa3c782",
        "name": "ramesh",
        "email": "ramesh@gmail.com",
        "password": "$2b$10$WU4M6FReTRsHZ84.5nGczuCLJd1q0wFJMRvdQvBoMxRcoQ5puXwFO",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-15T12:03:30.889Z",
        "updatedAt": "2023-11-15T12:03:30.889Z",
        "__v": 0
    },
    {
        "id": "6554b40f52266189edc7ba91",
        "name": "rame",
        "email": "rame@gmail.com",
        "password": "$2b$10$.gxdnLcNrn7Bf9rO8Q6ERuasHCRaIPYsT8.R5D3bE803QKfmTnOqK",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-15T12:05:35.311Z",
        "updatedAt": "2023-11-15T12:05:35.311Z",
        "__v": 0
    },
    {
        "id": "6554b49a15bc08859e5218a0",
        "name": "ayush",
        "email": "ayush@gmail.com",
        "password": "$2b$10$0ApXLDd1M6v5N/mWi2Iwvu1fLRNMKs2qtBifkf59IaS0uLXF4ossu",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-15T12:07:54.489Z",
        "updatedAt": "2023-11-15T12:07:54.489Z",
        "__v": 0
    },
    {
        "id": "6554b4be258f1bea6f54fddb",
        "name": "animesh",
        "email": "animesh@gmail.com",
        "password": "$2b$10$qUmDsi.voyci.6TJBXvuReBcgeEX0O9K.vGXTlFqjBIBCN4jorKRm",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-15T12:08:30.381Z",
        "updatedAt": "2023-11-15T12:08:30.381Z",
        "__v": 0
    },
    {
        "id": "65561ab6c388badcaf9c0d53",
        "name": "Mohd Haaris",
        "email": "harrismohd786@gmail.com",
        "password": "$2b$10$GympQdcVgtEILwLGn4SCLuywLRbW2mBlVX9q3yJFiW1i/C21XhnvS",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-16T13:35:50.650Z",
        "updatedAt": "2023-11-16T13:35:50.650Z",
        "__v": 0
    },
    {
        "id": "655624f2c388badcaf9c0d58",
        "name": "mock1234",
        "email": "abcded@gmail.com",
        "password": "$2b$10$xV0fnGv4i1iAJa6zUolSdesJnD1AsFhCm3Q8x2youzUSo50L84lIu",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-16T14:19:30.651Z",
        "updatedAt": "2023-11-16T14:19:30.651Z",
        "__v": 0
    },
    {
        "id": "65562557c388badcaf9c0d5b",
        "name": "mock12345",
        "email": "abcded242@gmail.com",
        "password": "$2b$10$7L/.sOFxewUT9GRLmia2HuhXxvP2WHx23kxm7WmeiGY/oh6YLk9/.",
        "isAdmin": false,
        "isSuperAdmin": false,
        "createdAt": "2023-11-16T14:21:11.062Z",
        "updatedAt": "2023-11-16T14:21:11.062Z",
        "__v": 0
    }
]




function Users() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);


    const fetchUsers = () => {

        api.get('/api/userAll').then(res => {


            if (res.status === 500) {

                console.log(res.error.message);

            }
            else {
                const data = res.data.map(s => {

                    return { ...s, id: s._id };

                });
                console.log('user api called');
                setUsers(data);
            }

        }).catch(err => console.log(err.message));
    }

    useEffect(() => {

        const token = sessionStorage.getItem('access-token');

        // if (!token.isAdmin && !token.isSuperAdmin) {


        //     navigate('/home');


        // }


        fetchUsers();






    }, [])

    return (

        <Datatable tableField={userColumns} tableData={users} fetchData={fetchUsers} Rpage={"/dashboard/userdetail"} title={"User"} />

    )
}

export default Users