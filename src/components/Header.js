// components/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import styles from "./header.module.css"

const Header = ({ logo }) => {
  return (
    <>
      {/* Top Header */}
      <div className="container-fluid px-3 justify-content-end" style={{ backgroundColor: '#1a808d', padding: '8px 0' }}>
        <div className="container">
          <div className="row">
            {/* Left Side: Social Media Links */}
            <div className="col-md-2 d-flex align-items-center">
              <ul className="list-inline mb-0 d-none d-sm-block">
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 text-white text-center">
              <p className="mb-0 d-none d-sm-block">
                40% Off Window Curtains and Blinds online - Sale End Today
              </p>
            </div>

            {/* Right Side: Contact Information */}
            <div className="col-md-4 d-flex justify-content-end align-items-center text-white">
              <p className="mb-0 me-3"><i className="bi bi-telephone"></i> <span className="fw-bold">+971581535184</span></p>
              <p className="mb-0 me-3"><i className="bi bi-envelope"></i> <span className="fw-bold">info@closingcurtain.ae</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <Navbar expand="lg" bg="light" variant="light">
        <div className="container">
          {/* Left Side: Logo */}
          <Navbar.Brand style={{ maxWidth: '10%', margin: 'auto' }} href="/" className={`${styles.logomain} mx-auto`} >
            <Image
            width={110}
            height={50}
              src={logo}
              alt="Logo"
              priority
              
              className={` d-inline-block align-top`}
            />
          </Navbar.Brand>

          {/* Mobile Menu Button */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Navbar Items */}
          <Navbar.Collapse id="navbar-nav" >
            {/* Middle: Menu */}
            <Nav className="mx-auto" >
              <Nav.Link href="/" className={styles.text} >Home</Nav.Link>
              <Nav.Link href="about-us" className={styles.text}>About Us</Nav.Link>
             

              <NavDropdown className={styles.text} title="Curtains" id="dropdown3">
                <NavDropdown className={styles.text} title="Home Curtains" id="dropdown2" drop="end">
                  <NavDropdown.Item href="living-room-curtains">Living Room Curtains</NavDropdown.Item>
                  <NavDropdown.Item href="bedroom-curtains">Bedroom Curtains</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className={styles.text} title="Commercial" id="dropdown2" drop="end">
                  <NavDropdown.Item href="hotel-curtains">Hotel Curtains</NavDropdown.Item>
                  <NavDropdown.Item href="office-curtains">Office Curtains</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className={styles.text} title="Types" id="dropdown2" drop="end">
                  <NavDropdown.Item href="eyelet-curtains">Eyelet Curtains</NavDropdown.Item>
                  <NavDropdown.Item href="sheer-curtains">Sheer Curtains</NavDropdown.Item>
                  <NavDropdown.Item href="silk-curtains">Silk Curtains</NavDropdown.Item>
                  <NavDropdown.Item href="linen-curtains">Linen Curtains</NavDropdown.Item>
                  
                </NavDropdown>
                <NavDropdown className={styles.text} title="Smart" id="dropdown2" drop="end">
                  <NavDropdown.Item href="#">Blackout Curtains</NavDropdown.Item>
                  <NavDropdown.Item href="electric-curtains">Electric Curtains</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className={styles.text} title="Curtain Accessories" id="dropdown2" drop="end">
                  <NavDropdown.Item href="#">Curtain Rings</NavDropdown.Item>
                  <NavDropdown.Item href="#">Curtain Rods</NavDropdown.Item>
                  <NavDropdown.Item href="curtain-tapes">Curtain Tapes</NavDropdown.Item>
                  
                </NavDropdown>
                {/* Add more fabric types as needed */}
              </NavDropdown>

              <NavDropdown className={styles.text} title="Blinds" id="dropdown3">
                <NavDropdown className={styles.text} title="Types" id="dropdown2" drop="end">
                  <NavDropdown.Item href="#">Bamboo Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item href="blackout-blinds-dubai">Blackout Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item href="#">Roller Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item href="#">Roman Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item href="venetian-blinds-dubai">Venetian Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item href="#">Vertical Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item href="wooden-blinds">Wooden Blinds Dubai</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className={styles.text} title="Commercial" id="dropdown2" drop="end">
                  <NavDropdown.Item href="office-blinds-dubai">Office Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item href="outdoor-blinds-dubai">Outdoor Blinds Dubai</NavDropdown.Item>
                </NavDropdown>
                {/* Add more fabric types as needed */}
              </NavDropdown>


              <Nav.Link href="#" className={styles.text}>Fabric Collection</Nav.Link>
              <Nav.Link href="#" className={styles.text}>Gallery</Nav.Link>
              <Nav.Link href="#" className={styles.text}>Blog</Nav.Link>
              <Nav.Link href="#" className={styles.text}>Contact Us</Nav.Link>
            </Nav>

            {/* Right Side: Get A Quote Button */}
            <button className="btn btn-primary" style={{ backgroundColor: "#1a808dff" }}>
              Get A Quote
            </button>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
