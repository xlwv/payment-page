import React, { useState } from 'react';
import './payment-form.css';
import { FaRegCreditCard } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { MdVerified } from "react-icons/md";




const Payment = () => {


    const [cardNumber, setCardNumber] = useState('   ');

    const mask = (value) => {
     
    
    const maskedValue=value.replace(/\d/g,'*');
    
   
    
    return maskedValue;
    };

    const handleChange = (event) => {
        setCardNumber(mask(event.target.value));
    };

   
   

    return (

        <div className='main-form'>

            <div className='heading'>
                <span className='line1'>Payment Method</span>
                <span className='line2'>Select your payment method and
                    enter your payment information.</span>
            </div>



            <div className='details'>
                <div className='card1'>

                    <div className='payment-method'>
                        <button className='btn'><FaRegCreditCard className='btn-icon' style={{ width: '24', height: '24', color: '#673821' }} /><span>Net Banking</span></button>
                        <button className='btn'><FaRegCreditCard className='btn-icon' style={{ width: '24', height: '24', color: '#673821' }} /><span>credit/debit card</span></button>
                        <button className='btn'><FaRegCreditCard className='btn-icon' style={{ width: '24', height: '24', color: '#673821' }} /><span>Add New Card</span></button>
                    </div>

                    

                    <form action="#" method="post">
                        <div className="form-group">
                            <label for="card-number" className='label-text'>Card Number</label>
                            <span className='text'>Enter the 16- digit card number</span>
                            <div className="input-with-icon">
                                <input type="text" id="card-number" className='name1' name="card-number" placeholder=""  value={cardNumber} required onChange={handleChange} />
                                
                                <MdVerified className="input-icon" />
                            </div>
                        </div>
                        <div className="form-group" >
                            <label for="name" className='label-text'>Card Holder Name</label>
                            <span className='text'>Enter Card holder name</span>
                            <div className="input-with-icon">
                                <input type="text" id="name" className='name2' name="name" placeholder="" required />
                                <MdVerified className="input-icon" />
                            </div>
                        </div>
                        <div className="form-group1 flex" >
                            <div className='column'>
                                <label for="cvv-no" className='label-text'>CVV Number</label>
                                <span className='text'>Enter the 4- digit number</span>
                            </div>
                            <input type="number" id="cvv-no" className='name3' name="cvv-no" placeholder="" required />
                        </div>
                        <div className="form-group1 flex">
                            <div className="column">
                                <label For="expiry-date" className='label-text'>Expiry Date</label>
                                <span className='text'>Enter the Expiration date of the card</span>
                            </div>
                            <div className="month-year ">
                                <input type="text" id="expiry-month" className='name4 ' name="expiry-month" placeholder="" required />
                                <div className='slash'><RxSlash style={{ height: '75' }} /></div>
                                <input type="text" id="expiry-year" className='name5 ' name="expiry-year" placeholder="" required />
                            </div>
                        </div>


                        <div className="form-submit">
                            <input type="submit" className='submit' value="Confirm and Pay" />
                           
                        </div>
                    </form>
                
                </div>

                <div className='card2'>
                    <div className='card-details'>
                        
                            <div className='card-icon'>
                                <span className='metalic-card'></span>
                                <span className='wifi'></span>
                            </div>
                            <div className='name-number'>
                                <span className='card-holder-name'>Card Holder Name</span>
                                <span className='card-number'><h1>.... .... .... ....</h1></span>

                            </div>
                            <div className='valid-date'>
                                <span className='exp-date'>MM/YY</span>
                                <div className='visa-icon-text'>
                                    <span className='visa-icon'></span>
                                    <span className='visa-text'>Visa Card</span>

                                </div>
                            </div>
                        
                    </div>



                    <div className='card-amount'>
                    <span className='amount-txt'>Amount to Pay</span>
                            <div className='to-pay'>
                            
                                <span className='circle1'></span>
                                <span className='cad'>CAD 150</span>
                                <span className='circle2'></span>

                            </div>
                    </div>






                </div>


            </div>
        </div>
    );

}

export default Payment;