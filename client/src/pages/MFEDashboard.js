import React from "react";
import { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const MFEDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Container fluid>
        <Row>
          {showSidebar && (
            <Col md={2} className="bg-dark text-light sidebar">
              <Nav className="flex-column">
                <Nav.Link className="text-light" href="#dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link className="text-light" href="#products">
                  Products
                </Nav.Link>
                <Nav.Link className="text-light" href="#orders">
                  Orders
                </Nav.Link>
              </Nav>
            </Col>
          )}
          <Col md={showSidebar ? 10 : 12} className="bg-light main-content">
            <button
              className="btn btn-primary toggle-btn"
              onClick={handleToggleSidebar}
            >
              Toggle Sidebar
            </button>
            <h1 className="mt-4">Product Dashboard</h1>
            <div className="p-4">
              <h2 className="mb-3">Product Name</h2>
              <p className="lead">Product A</p>
              <h2 className="mb-3">Quantity</h2>
              <p className="lead">10</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MFEDashboard;
