const services_response = [
    "Docker",
    "Kubernets"
]

const plans_response = {
    "data": [
        {
            "_id": "6554d38b315c13bbf1cbe44c",
            "servicename": "Docker",
            "description": "Number of concurrent builds : 5",
            "plan": "Basic",
            "price": 5
        },
        {
            "_id": "6556260cb15edce354fe3722",
            "servicename": "Docker",
            "description": "Number of concurrent builds : 10",
            "plan": "Standard",
            "price": 35
        },
        {
            "_id": "6556264db15edce354fe3724",
            "servicename": "Docker",
            "description": "Number of concurrent builds : 20",
            "plan": "Pro",
            "price": 65
        }
    ]
}

const userAll = [
    {
        "_id": "65532e8c774e0cff374f8258",
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
        "_id": "65539fc4c71e7df991f8027c",
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
        "_id": "6553a42fc7b08448b003c76b",
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
        "_id": "6553ac73dba575119eedeff4",
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
        "_id": "6554b392f433dfd3ffa3c782",
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
        "_id": "6554b40f52266189edc7ba91",
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
        "_id": "6554b49a15bc08859e5218a0",
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
        "_id": "6554b4be258f1bea6f54fddb",
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
        "_id": "65561ab6c388badcaf9c0d53",
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
        "_id": "655624f2c388badcaf9c0d58",
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
        "_id": "65562557c388badcaf9c0d5b",
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

const user_id = {
    "_id": "65532e8c774e0cff374f8258",
    "name": "tamwik",
    "email": "abcdef@gmail.com",
    "password": "$2b$10$wK2egvQ7I1cqOrBr8pZIyuQWUbI.5fMHJKkZs8YrGBwUWw6kifqNG",
    "isAdmin": false,
    "isSuperAdmin": false,
    "createdAt": "2023-11-14T08:23:40.803Z",
    "updatedAt": "2023-11-14T08:23:40.803Z",
    "__v": 0
}

const servicesAll = [
    {
        "_id": "6554ba9fb6652e61bdc01ce8",
        "productId": "prod_P0fHy7OZwYPVKZ",
        "servicename": "Kubernets",
        "description": "1GB RAM , 2 Core CPU",
        "plan": "Basic",
        "priceId": "price_1OCdwXSCZn81mFB25Dni9AYj",
        "duration": "12 days",
        "__v": 0
    },
    {
        "_id": "6554bc6a845290a26d612ad5",
        "productId": "prod_P0jrXpBOdITFEL",
        "servicename": "Kubernets",
        "description": "2GB RAM , 2 Core CPU",
        "plan": "Standard",
        "priceId": "price_1OCiO8SCZn81mFB2ra2SxQsD",
        "duration": "24 days",
        "__v": 0
    },
    {
        "_id": "6554d38b315c13bbf1cbe44c",
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
        "_id": "6556260cb15edce354fe3722",
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
        "_id": "6556264db15edce354fe3724",
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

const cartAll = [
    {
        "_id": "6554e5704bf1af62be2a0d1f",
        "user": {
            "_id": "6554b4be258f1bea6f54fddb",
            "name": "animesh",
            "email": "animesh@gmail.com",
            "password": "$2b$10$qUmDsi.voyci.6TJBXvuReBcgeEX0O9K.vGXTlFqjBIBCN4jorKRm",
            "isAdmin": false,
            "isSuperAdmin": false,
            "createdAt": "2023-11-15T12:08:30.381Z",
            "updatedAt": "2023-11-15T12:08:30.381Z",
            "__v": 0
        },
        "items": [
            "6554ba9fb6652e61bdc01ce8"
        ],
        "__v": 8
    },
    {
        "_id": "6554f091cc432d94859dd397",
        "user": {
            "_id": "6554b49a15bc08859e5218a0",
            "name": "ayush",
            "email": "ayush@gmail.com",
            "password": "$2b$10$0ApXLDd1M6v5N/mWi2Iwvu1fLRNMKs2qtBifkf59IaS0uLXF4ossu",
            "isAdmin": false,
            "isSuperAdmin": false,
            "createdAt": "2023-11-15T12:07:54.489Z",
            "updatedAt": "2023-11-15T12:07:54.489Z",
            "__v": 0
        },
        "items": [
            "6554ba9fb6652e61bdc01ce8"
        ],
        "__v": 3
    }
]

