// ALL THE PRODUCTS

import React from "react";
import img1 from "../images/basmatirice.jpg";
import img2 from "../images/farmerketchup.jpg";
import img3 from "../images/garlicoil.jpg";
import img4 from "../images/pulses.jpg";
import img5 from "../images/soyabean.jpg";
import img6 from "../images/milkpowder.jpg";
import MFEProductCard from "./MFEProductCard";
import axios from "axios";


const MFEProducts = () => {

  const checkouthandler =async(amount)=>{
    const key = "rzp_test_EnJA3p9CWHG7GU"
    const {data:{order}}=await axios.post("http://localhost:6100/api/mfe/checkout",{amount})
    console.log(window);
    const options ={
      key:key,
      amount:order.amount,
      currency:"INR",
      name:"Sinmplyjs",
      description:"Razorpay tutorial",
      image:"https://avatars.githubusercontent.com/u/96648429?s=96&v=4",
      order_id:order.id,
      callback_url:"http://localhost:6100/api/mfe/paymentverification",
      prefill:{
        name:"AgriSync",
        email:"gholesailie@gmail.com",
        contact:"1234567890"
      },
      notes:{
        "address":"razorapy official"
      },
      theme:{
        "color":"#3399cc"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  }

  const products = [
    { img: img2, badge: { class: 'bg-primary', text: 'New' }, productName: 'Product name', category: 'Category', price: '$61.99', onClick: () => checkouthandler(checkouthandler) },
    { img: img1, badge: { class: 'bg-success', text: 'Eco' }, productName: 'Product name', category: 'Category', price: '$61.99', onClick: () => checkouthandler(checkouthandler) },
    { img: img2, badge: { class: 'bg-primary', text: 'New' }, productName: 'Product name', category: 'Category', price: '$61.99', onClick: () => checkouthandler(checkouthandler) },
    { img: img4, badge: { class: 'bg-success', text: 'Eco' }, productName: 'Product name', category: 'Category', price: '$61.99', discountPrice: '$50.99', onClick: () => checkouthandler(checkouthandler) },
    { img: img5, productName: 'Product name', category: 'Category', price: '$61.99', onClick: () => checkouthandler(checkouthandler) },
    {
      img: img6,
      badge: { class: 'bg-primary', text: 'New' },
      productName: 'Product name',
      category: 'Category',
      price: (
        <>
          <s>$61.99</s>
          <strong className="ms-2 text-danger">$50.99</strong>
        </>
      ),
      onClick: () => checkouthandler(checkouthandler),
    },
  ];

  

  return (
    <>
      <h1 className="text-center">All our MFE Products!!</h1>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5">
            <strong>Bestsellers</strong>
          </h4>
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="col-lg-4 col-md-12 mb-4">
                <MFEProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MFEProducts;
