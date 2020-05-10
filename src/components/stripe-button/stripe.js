import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const stripe = ({price}) => {
  const priceForStripe=price * 100;
  const publishabelKy='pk_test_og2xjJKMUPC1ZVZso9jX8aq700qQU1wN0e';

const  onTokewn=token=>{
    console.log(token);
    alert('pay seuces')
    
  }
  return(
      <StripeCheckout
        label='pay Now'
        name='CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onTokewn}
        stripeKey={publishabelKy}
      />
  )
}

export default stripe
