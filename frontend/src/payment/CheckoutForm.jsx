import { Container,Button,Card,CardContent } from '@mui/material';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
   

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: window.location.origin+"/success",
            },
        });
        console.log(result);
        

            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
    }


    return (
        <Container component="main" maxWidth="md"  sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <Card sx={{width:"100%",py:5}}>
        <CardContent>
        <form>
            
            <PaymentElement />
            <Button disabled={!stripe} variant='contained' fullWidth onClick={handleSubmit}>Submit</Button>
        </form>
        </CardContent>
        </Card>
        </Container>
    )
};

export default CheckoutForm;