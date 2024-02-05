import { Container, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'

import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import CartCard from '../components/CartCard';
import TotalCard from '../components/TotalCard';

const Cart = () => {
  const [items, setItems] = useState(0);
  const [total, setTotal] = useState(0);
  const [prices, setPrices] = useState([]);
  const navigate = useNavigate();
  const fetchApi = (token) => {
    api.get('/api/cart', { headers: { "Authorization": token } }).then(res => {
      const resp = res.data.data
      setItems(res.data.data);
      let s = 0;
      let p = [];
      if (resp?.length > 0 ) {resp.forEach((ele) => {
        if (ele.price) s += Number(ele.price);
        p.push(ele.priceId);
        
      });
    }
      setPrices(p);
      setTotal(s);
    }).catch(error => {
      alert(error);
    })

  }
  useEffect(() => {
    const token = sessionStorage.getItem('access-token');
    if (token) {
      fetchApi(token)

    }
    else {
      navigate("/login")
    }
  }, [])



  return (
    <Container Gutters component="main" sx={{ pt: 8, pb: 6 }}>
      <Grid container spacing={6} >
        <Grid item xs={12} sm={6} >
          {items!==0 && 
            items.map((item, idx) => (
              <Grid item key={idx} xs={12} sx={{ pb: 4 }}>
                <CartCard item={item} handleDelete={fetchApi} />
              </Grid>
            ))
          }
        </Grid>
        <Grid item xs={12} sm={6} >
          <TotalCard total={total} cart={prices} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart