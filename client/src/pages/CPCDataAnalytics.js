import React from 'react';
import { Link } from 'react-router-dom';
import ChartComponent from './ChartComponent';
import ChartComponentnew from './Chartcomponentnew'
const CPCDataAnalytics = () => (
  <div className="container bg">
    <div className="row">
      {[
        { cardNumber: 1, text: 'GRADATION' },
        { cardNumber: 2, text: 'PRODUCTION' },
        { cardNumber: 3, text: 'EMPLOYEES'},
      ].map(({ cardNumber, text, chartRoute }) => (
        <div
          key={cardNumber}
          className="col-sm-6 col-md-4 col-lg-3"
        >
          <Link to={chartRoute} className="card" style={{
            backgroundColor: getBackgroundColor(cardNumber),
            margin: '20px',
          }}>
            <div className="card-body">
              <h5 className="card-title">{text}</h5>
            </div>
          </Link>
        </div>
      ))}
      </div>
      <div className='d-flex justify-content-between'>
      <ChartComponent />
    <ChartComponentnew/>
      </div>
  
  </div>
);

const getBackgroundColor = (cardNumber) => {
  switch (cardNumber) {
    case 1:
      return 'lightblue';
    case 2:
      return 'lightgreen';
    case 3:
      return 'lightpink';
    case 4:
      return 'lightyellow';
    default:
      return 'white';
  }
};



export default CPCDataAnalytics;
