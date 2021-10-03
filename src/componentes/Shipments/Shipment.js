import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css';

const Shipment = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const onSubmit = data => {
    const savedCart=getDatabaseCart();
    const orderDetails={...loggedInUser,products:savedCart,shipment:data,orderTime:new Date()};
      fetch('https://stormy-everglades-30231.herokuapp.com/addOrder',{
        method:'POST',
        headers:{
          'Content-type': 'application/json'
      },
      body:JSON.stringify(orderDetails)
      })
      .then(res=>res.json())
      .then(data=>{
        if (data) {
          processOrder()          
          alert("your order placed successfully")
        }
      })
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
      {errors.name && <span className="error">This name is required</span>}  

      <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your email"/>
      {errors.email && <span className="error">This email is required</span>}  
      
      <input  {...register("address", { required: true })} placeholder="Your address"/>
      {errors.address && <span className="error">This address is required</span>}  
      
      <input  {...register("phone", { required: true })} placeholder="Your phone"/>
      {errors.phone && <span className="error"> phone is required</span>}  
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;