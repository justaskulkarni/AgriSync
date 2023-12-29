// Card.js
// ProductCard.js
import React from 'react';

const MFEProductCard = ({ img, badge, productName, category, price, discountPrice, onClick }) => {
  return (
    <div className="card">
      <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
        <img src={img} className="card-img-top" alt={productName} />
        <a href="#!">
          <div className="mask">
            <div className="d-flex justify-content-start align-items-end h-100">
              {badge && (
                <h5>
                  <span className={`badge ${badge.class} ms-2`}>{badge.text}</span>
                </h5>
              )}
            </div>
          </div>
          <div className="hover-overlay">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
          </div>
        </a>
      </div>
      <div className="card-body">
        <a href="#!" className="text-reset">
          <h5 className="card-title mb-3">{productName}</h5>
        </a>
        <a href="#!" className="text-reset">
          <p>{category}</p>
        </a>
        {discountPrice ? (
          <h6 className="mb-3">
            <s>{price}</s>
            <strong className="ms-2 text-danger">{discountPrice}</strong>
          </h6>
        ) : (
          <h6 className="mb-3">{price}</h6>
        )}
        <button className="btn btn-primary" onClick={onClick}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default MFEProductCard;

