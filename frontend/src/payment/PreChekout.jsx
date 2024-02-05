import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback, useEffect, useState } from 'react';
import api from '../api/axios';
import { decodeToken } from 'react-jwt';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OJHaaSBaCtodfM9S26h5hLgnshOG0NBCOWZb0D5Bato2YNtglyYK1nFsBIAyToAmEF4ArPMFtha31gviPBibwsw00ivnVZg75');

export default function PreCheckout() {
  const location=useLocation();
  const [options, setOption] = useState({
    // passing the client secret obtained from the server
    clientSecret: null,
  });
  useCallback(useEffect(() => {
    console.log("Prices here")
    console.log(location.state)
    const fetchClient = async () => {

      const AccessToken = decodeToken(sessionStorage.getItem('access-token'));
      console.log(AccessToken);

      const customer = await api.post('/api/payment/create-customer', { email: AccessToken.email, name: AccessToken.name });
      if (!customer) {

        return;

      }
      console.log(customer);


      const res = await api.post('/api/payment/create-subscriptions', { customerId: customer.data.customerId, priceId: location.state });

      console.log(res);

      if (!res) {
        return;

      }

      setOption({ clientSecret: res.data.clientSecret });


    }

    fetchClient();


  }, [setOption]), []);



  return (<>
    {options.clientSecret ? <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements> : <></>}
  </>

  );
};