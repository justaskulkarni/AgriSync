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

  const initPayment = (data) => {
		const options = {
			key: "rzp_test_EnJA3p9CWHG7GU",
			amount: data.amount,
			currency: data.currency,
			name: products.name,
			description: "Test Transaction",
			image: products.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:6100/api/mfe/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async (price) => {
		try {
      console.log(price)
			const orderUrl = "http://localhost:6100/api/mfe/orders";
			const { data } = await axios.post(orderUrl, { amount: price });
			// console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

  const products = [
    { img: img2, badge: { class: 'bg-primary', text: 'New' }, productName: 'Product name', category: 'Category', price: 'Rs. 150',  onClick: () => {handlePayment(61.99)} },
    { img: img1, badge: { class: 'bg-success', text: 'Eco' }, productName: 'Product name', category: 'Category', price: 'Rs. 150',  onClick: () => {handlePayment(61.99)} },
    { img: img2, badge: { class: 'bg-primary', text: 'New' }, productName: 'Product name', category: 'Category', price: 'Rs. 150',  onClick: () => {handlePayment(61.99)} },
    { img: img4, badge: { class: 'bg-success', text: 'Eco' }, productName: 'Product name', category: 'Category', price: 'Rs. 150',  onClick: () => {handlePayment(61.99)} },
    { img: img5, productName: 'Product name', category: 'Category', price: 'Rs. 150',  onClick: () => {handlePayment(61.99)}},
    {
      img: img6,
      badge: { class: 'bg-primary', text: 'New' },
      productName: 'Product name',
      category: 'Category',
      // price: (
      //   <>
      //     <s>Rs. 150</s>
      //     <strong className="ms-2 text-danger">$50.99</strong>
      //   </>
      // ),
      price: 'Rs. 150',
      onClick: () => {handlePayment(61.99)},
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
                <MFEProductCard {...product} onClick={() => handlePayment(product.price)} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MFEProducts;
