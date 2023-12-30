import React from "react";
import "../stylesheets/Success.css";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import jsPDF from 'jspdf';
import logo from '../images/logo (2).jpeg';

function Success() {
  const location = useLocation();
  const pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");

    // Set default font style
    doc.setFont("helvetica", "bold");

    // Add header
    doc.setFontSize(32);
    doc.text("Let's Endorse", 250, 20);                                     

    // Add logo
    doc.addImage(logo, "JPEG", 215, 20, 200, 200);

    // Add details
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black color for text

    const details = [
      "Commodity: ",
      "State: ",
      "District: ",
      "Quantity: ",
      "Request ID: ",
    ];

    const values = [
      location.state.name,
      location.state.state,
      location.state.district,
      location.state.quantity + " kg",
      (Math.random()*100000).toString(),

    ]

    let currentY = 250; // Starting Y position for details

    details.forEach((detail) => {
      doc.text(detail, 20, currentY);
      currentY += 20; // Increment Y position for the next detail
    });

    // Add a line break
    currentY += 10;

    // Add a thank you message
    doc.setTextColor(0, 0, 0); // Black color for the thank you message
    doc.setFontSize(16);
    doc.text("Thank you for your request!", 20, currentY);

    // Save the document
    doc.save("endorsement_details.pdf");
  };

  return (
    <>
      <div className="contain">
        <div className="congrats">
          <h1>
            Congrat<span className="hide">ulation</span>s !
          </h1>

          <div className="text">
            <p>
              You have successfully booked a Request. <br />
              Here are your details
              <br />
              Name: {location.state.name}
              ---- {location.state.district}
              Date: 12.12.12
              <br />
              Time: 11am
              <br />
              ID: 12324
            </p>
            <p>Eagerly awaiting your visit</p>
          </div>
          <p className="regards">Regards, Team Let's Endorse</p>
        </div>
      </div>

      <Button onClick={pdfGenerate}>Download PDF</Button>
    </>
  );
}

export default Success;
