import React from 'react'

const Pay = ({ selectedPay }) => {
    console.log(selectedPay)
  return (
    <div className='pay'>  
        <div className="selectePaymentMethod" style={{color: selectedPay.color}}>
            <h3>selected payment method</h3>    
            <h2>{selectedPay.name}</h2>
        </div>
        <button style={{backgroundColor: selectedPay.color, borderRadius: 0}} className='buyBtn productPlaceOrder checkout'>Proceed</button>
    </div>
  )
}

export default Pay