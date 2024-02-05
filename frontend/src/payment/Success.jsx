import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios';
function Success() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(10000); 
        const token=sessionStorage.getItem('access-token');
        console.log("Bearer"+token);
        api.post('/api/cartempty',{} ,{ headers: { "Authorization": token } }).then(res=>{
            navigate('/')
        }).catch(error=>{
            navigate('/cart');
        })
            
    },[])
    return (
    <h1>
        Success
    </h1>
  )
}

export default Success
