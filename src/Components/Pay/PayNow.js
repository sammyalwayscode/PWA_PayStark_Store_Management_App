import React, { useState } from 'react';
// ] 
import { usePaystackPayment } from 'react-paystack';
import { useHistory } from "react-router-dom"
import Thanks from "../ThanksPage/ThanksPage";
import { Input } from 'antd';
import { Button } from 'antd';
// import './App.css';

// const config = {
//   reference: (new Date()).getTime(),
//   email: "user@example.com",

//   amount: amount,
//   publicKey: 'pk_test_f747091150685438ae86d5a98b5df3c60275f367',
//   //pk_live_1b38eded7c4210daa7cf2270cebee0bf90de0252
// };

// you can call this function anything
const onSuccess = (reference) => {
  // history.pushState("/thanks")
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

export const PayNow = () => {
  const history = useHistory()
  const [amount, setAmount] = useState(0)
  const [email, setEmail] = useState('')
  const initializePayment = usePaystackPayment({
    reference: (new Date()).getTime(),
    email: email,
    amount: amount,
    publicKey: 'pk_test_f747091150685438ae86d5a98b5df3c60275f367',
    //pk_live_1b38eded7c4210daa7cf2270cebee0bf90de0252
  });


  const onSuccess = (reference) => {
    history.push("/thanks")
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <center>You Are Given N {amount / 100} </center>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "20px",
        width: '200px'
      }}>
        <Input placeholder="Amount" value={amount} onChange={(e) => {
          setAmount(e.target.value)
        }} /></div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "20px",
        width: '200px'
      }}>
        <Input placeholder="email" value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} /></div>

      <Button style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "30px"
      }} onClick={() => {
        initializePayment(onSuccess, onClose)
      }}>Pay Now</Button>
    </div >
  );
};
