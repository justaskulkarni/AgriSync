import React from "react";
import "../stylesheets/Success.css";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
import logo from '../images/letsendorse.png'
import p1 from '../images/p1.jpg'
import lightBlue from '../images/lbue.PNG'
import blue from '../images/blue.PNG'
import thx from '../images/thx.jpg'
import kissan from '../images/kissan.JPG'

function Success() {
  const location = useLocation();

  const name = location.state.name
  const district = location.state.district


  const today = new Date()
  const todayString = today.toLocaleDateString()
  const time = today.toLocaleTimeString()
  const id = Math.ceil(Math.random()*100000)

  const newPDFGenerate = () => {
    var props = {
      outputType: OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: "Request_Details",
      orientationLandscape: false,
      compress: true,
      logo: {
        src: logo,
        width: 80, //aspect ratio = width/height
        height: 26.66,
        margin: {
          top: 0, //negative or positive num, from the current position
          left: 0 //negative or positive num, from the current position
        }
      },
      stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        type: 'JPG', //optional, when src= data:uri (nodejs case)
        width: 30, //aspect ratio = width/height
        height: 20,
        margin: {
          top: 0, //negative or positive num, from the current position
          left: 0 //negative or positive num, from the current position
        }
      },
      business: {
        name: "AgriSync Solutions Ltd",
        address: "Wing A, Vadala, Mumbai, Maharashtra - 410206",
        phone: "(+91) 868 99 180 42",
        email: "agsync@gmail.com",
        email_1: "info_agsync@agsolutions.in",
        website: "www.agrisyncsolutions.in",
      },
      contact: {
        label: "Invoice issued for:",
        name: "Aditya Kulkarni",
        address: "Thane, Maharashtra, India",
        phone: "(+91) 7128792190",
        email: "dcadityakulkarni101@gmail.com",
        otherInfo: "Commodity request",
      },
      invoice: {
        label: "Invoice #: ",
        num: id,
        invDate: "Request Date: " + todayString,
        invGenDate: "Report generation Time: " + time,
        headerBorder: true,
        tableBodyBorder: true,
        header: [
          {
            title: "#",
            style: {
              width: 10,
            }
          },
          {
            title: "Title",
            style: {
              width: 50
            }
          },
          {
            title: "Description",
            style: {
              width: 90,
            }
          },
          {
            title: "Data Disclosure", style: {
              width: 40,
            }
          },
        ],
        table: [
          [1, "Aditya", "First name of recipient", "Public"],
          [2, "Kumar", "Middle name of recipient", "Public"],
          [3, "Kulkarni", "last name of recipient", "Public"],
          [4, "Type", "Commodity submission request", "Public"],
          [5, "Commodity", "Requested commodity - Tomato", "Public"],
          [6, "Units", "Weighed in - kilograms (kg)", "Public"],
          [7, "Invoice number", id.toString(), "Private"],
          [8, "Request number", (id).toString().substring(1,5), "Private"],
          [9, "Requested via", "Official website - www.agrisyncsolutions.com", "Public"],
          [10, "Month of request", "January", "Public"],
          [11, "Price of commodity", "400", "Public"],
        ],
        additionalRows: [{
          col1: 'Total:',
          col2: 'Rs. 416.00',
          col3: 'Unit',
          style: {
            fontSize: 9 //optional, default 12
          }
        },
        {
          col1: 'GST:',
          col2: '3',
          col3: '%',
          style: {
            fontSize: 9 //optional, default 12
          }
        },
        {
          col1: 'Platform fee:',
          col2: '1',
          col3: '%',
          style: {
            fontSize: 9 //optional, default 12
          }
        },
        {
          col1: 'Transaction fee:',
          col2: '0',
          col3: '%',
          style: {
            fontSize: 10 //optional, default 12
          }
        }],
        invDescLabel: "Request PDF",
        invDesc: "This pdf has been generated for a request made by Mr. Aditya Kulkarni with the details mentiioned in the above table. Created via the official website, this PDF contains all the necessary details you would require for reference and validation.",
      },
      footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page ",
    };

    var pdfObject = jsPDFInvoiceTemplate(props);

    var pdf = pdfObject.jsPDFDocObject

    var X = 10
    var Y = 132

    pdf.addImage(thx, X+15, Y, 50, 35)
    Y = 192

    pdf.setTextColor('white')
    pdf.setFontSize(12)
    pdf.addImage(p1, X, Y-0.5, 192,5.5)
    pdf.addImage(lightBlue, X, Y+6, 192,56)

    pdf.text(X+10, Y+3.8, "This is a computer generated PDF. Do not share it with anyone else for your data security!")
    Y += 5.5
    pdf.setTextColor('black')
    pdf.setFontSize(24) 
    pdf.setFont("Times New Roman", "bold")
    pdf.cell(X,Y+0.5,192, 12," ", 20, "justify")
    Y += 1
    pdf.addImage(blue, X+0.5, Y, 191,11)
    Y += 7

    pdf.text("Terms and conditions", X+55, Y+1)
    
    pdf.setTextColor('#FF0000')
    pdf.setFontSize(12) 
    pdf.setFont("Times New Roman", "italic")

    Y += 10

    X += 1

    pdf.text("1. The provided price is non-negotiable and remains fixed throughout the grading process.", X, Y)
    Y += 5

    pdf.text("2. The specified quantity is final, and any changes to the quantity require the submission of a new request.", X, Y)
    Y += 5

    pdf.text("3. The company reserves the right to refuse or modify grading requests based on unforeseen circumstances or", X, Y)
    Y += 5

    pdf.text("availability of resources.", X+4, Y)
    Y += 5

    pdf.text("4. Payment for the grading services is due upon completion of the grading process.", X, Y)
    Y += 5

    pdf.text("5. Grading results are final and binding. Requests for reevaluation may be considered, but are not guaranteed.", X, Y)
    Y += 5

    pdf.text("6. The company may update these terms and conditions at its discretion, and farmers will be notified of", X, Y)
    Y += 5

    pdf.text("any changes through the provided contact information.", X+4, Y)
    Y += 5


    pdf.save("Request_PDF")

  }
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
              <br />  {location.state.district}
              Date: 1st Januray 2023
              <br />
              <br />
              ID: 12324
            </p>
            <p>Eagerly awaiting your visit</p>
          </div>
          <p className="regards">Regards, Team Let's Endorse</p>
        </div>
      </div>

      <Button onClick={newPDFGenerate}>Download PDF</Button>
    </>
  );
}

export default Success;
