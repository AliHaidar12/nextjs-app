// components/Header.js
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import styles from "./header.module.css"
import Link from 'next/link';

const Header = ({ logo }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(null);

  const handleMouseEnter = (dropdownId) => {
    setDropdownVisible(dropdownId);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
  };

  const [isDropdownVisible1, setDropdownVisible1] = useState(null);

  const handleMouseEnter1 = (dropdownId) => {
    setDropdownVisible1(dropdownId);
  };

  const handleMouseLeave1 = () => {
    setDropdownVisible1(null);
  };

  const [isInnerDropdownVisible, setInnerDropdownVisible] = useState(null);

  const handleInnerMouseEnter = (dropdownId) => {
    setInnerDropdownVisible(dropdownId);
  };

  const handleInnerMouseLeave = () => {
    setInnerDropdownVisible(null);
  };
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
                  <Link href="https://www.facebook.com/Closing-Curtain-104753588695284" className="text-white"><i className="bi bi-facebook"></i></Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link href="https://twitter.com/closingcurtain" className="text-white"><i className="bi bi-twitter"></i></Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link href="https://www.instagram.com/closingcurtain.ae/" className="text-white"><i className="bi bi-instagram"></i></Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link href="https://www.linkedin.com/in/closing-curtain-bb0588225/" className="text-white"><i className="bi bi-linkedin"></i></Link>
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
              <p className={styles.space}><i className="bi bi-telephone"></i> <span className="fw-bold">+971581535184</span></p>
              <p className="mb-0 ml-10"><i className="bi bi-envelope"></i> <span className="fw-bold">info@closingcurtain.ae</span></p>
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
              <Nav.Link href="/" className={styles.text1} >Home</Nav.Link>
              <Nav.Link href="/about-us/" className={styles.text1}>About Us</Nav.Link>
             
            
              <NavDropdown
                onMouseEnter={() => handleMouseEnter('dropdown3')}
                onMouseLeave={handleMouseLeave}
                show={isDropdownVisible === 'dropdown3'}
                className={` ${styles.text2}`}
                title={"Curtains"}
                id="dropdown3"
              >
                {(isDropdownVisible === 'dropdown3') && (
                  <>
                    <NavDropdown
                      onMouseEnter={() => handleInnerMouseEnter('dropdown2')}
                      onMouseLeave={handleInnerMouseLeave}
                      show={isInnerDropdownVisible === 'dropdown2'}
                      className={`${styles.text} ${styles.subMenu}`}
                      //title="Home Curtains"
                      title={<Link href="/service/home-curtains/" className={` ${styles.text}`}>Home Curtains</Link>}
                      href="/service/home-curtains/"
                      id="dropdown2"
                      drop="end"
                    >
                      {(isInnerDropdownVisible === 'dropdown2') && (
                  <>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/living-room-curtains/">Living Room Curtains</NavDropdown.Item>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/bedroom-curtains/">Bedroom Curtains</NavDropdown.Item>
                      </>)}
                    </NavDropdown>

                    <NavDropdown
                      onMouseEnter={() => handleInnerMouseEnter('dropdown5')}
                      onMouseLeave={handleInnerMouseLeave}
                      show={isInnerDropdownVisible === 'dropdown5'}
                      className={`${styles.text} ${styles.subMenu}`}
                      title={<Link href="#" className={` ${styles.text}`}>Commercial</Link>}
                      id="dropdown5"
                      drop="end"
                    >
                      {(isInnerDropdownVisible === 'dropdown5') && (
                  <>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/hotel-curtains/">Hotel Curtains</NavDropdown.Item>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/office-curtains/">Office Curtains</NavDropdown.Item>
                      </>)}
                    </NavDropdown>

                    <NavDropdown
                      onMouseEnter={() => handleInnerMouseEnter('dropdown6')}
                      onMouseLeave={handleInnerMouseLeave}
                      show={isInnerDropdownVisible === 'dropdown6'}
                      className={`${styles.text} ${styles.subMenu}`}
                      title={<Link href="#" className={` ${styles.text}`}>Type</Link>}
                      id="dropdown6"
                      drop="end"
                    >
                      {(isInnerDropdownVisible === 'dropdown6') && (
                  <>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/eyelet-curtains/">Eyelet Curtains</NavDropdown.Item>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/sheer-curtains/">Sheer Curtains</NavDropdown.Item>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/silk-curtains/">Silk Curtains</NavDropdown.Item>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/linen-curtains/">Linen Curtains</NavDropdown.Item>
                    </>)}
                    </NavDropdown>

                    <NavDropdown
                      onMouseEnter={() => handleInnerMouseEnter('dropdown7')}
                      onMouseLeave={handleInnerMouseLeave}
                      show={isInnerDropdownVisible === 'dropdown7'}
                      className={`${styles.text} ${styles.subMenu}`}
                      title={<Link href="#" className={` ${styles.text}`}>Smart</Link>}
                      id="dropdown7"
                      drop="end"
                    >
                      {(isInnerDropdownVisible === 'dropdown7') && (
                  <>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/blackout-curtains/">Blackout Curtains</NavDropdown.Item>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/electric-curtains/">Electric Curtains</NavDropdown.Item>
                      </>)}
                    </NavDropdown>

                    <NavDropdown
                      onMouseEnter={() => handleInnerMouseEnter('dropdown8')}
                      onMouseLeave={handleInnerMouseLeave}
                      show={isInnerDropdownVisible === 'dropdown8'}
                      className={`${styles.text} ${styles.subMenu}`}
                      //title="Curtain Accessories"
                      title={<Link href="/service/curtain-accessories/" className={styles.text}>Curtain Accessories</Link>}
                      id="dropdown8"
                      drop="end"
                    >
                      {(isInnerDropdownVisible === 'dropdown8') && (
                  <>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/curtain-rings/">Curtain Rings</NavDropdown.Item>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/curtain-rods/">Curtain Rods</NavDropdown.Item>
                      <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/curtain-tapes/">Curtain Tapes</NavDropdown.Item>
                      </>)}
                    </NavDropdown>
                    {/* Add more fabric types as needed */}
                  </>
                )}
              </NavDropdown>

              <NavDropdown 
                onMouseEnter={() => handleMouseEnter1('dropdown4')}
                onMouseLeave={handleMouseLeave1}
                show={isDropdownVisible1 === 'dropdown4'}
                className={` ${styles.text2}`}
                title={"Blinds"}
                // href="/service/blinds-dubai/"
                
                 id="dropdown4">
                  {(isDropdownVisible1 === 'dropdown4') && (
                  <>
                <NavDropdown.Item className={`${styles.text}`} href="/service/blinds-dubai/">Blinds Shop In Dubai</NavDropdown.Item>
                <NavDropdown
                      onMouseEnter={() => handleInnerMouseEnter('dropdown9')}
                      onMouseLeave={handleInnerMouseLeave}
                      show={isInnerDropdownVisible === 'dropdown9'}
                      className={`${styles.text} ${styles.subMenu}`}
                      title={<Link href="#" className={` ${styles.text}`}>Type</Link>}
                      id="dropdown9"
                      drop="end"
                    >
                      {(isInnerDropdownVisible === 'dropdown9') && (
                  <>
                  <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/bamboo-blinds-dubai/">Bamboo Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/blackout-blinds-dubai/">Blackout Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/roller-blinds-dubai/">Roller Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/roman-blinds-dubai/">Roman Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/venetian-blinds-dubai/">Venetian Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/vertical-blinds-dubai/">Vertical Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/wooden-blinds/">Wooden Blinds Dubai</NavDropdown.Item>
                  </>)}
                </NavDropdown>
                <NavDropdown
                      onMouseEnter={() => handleInnerMouseEnter('dropdown10')}
                      onMouseLeave={handleInnerMouseLeave}
                      show={isInnerDropdownVisible === 'dropdown10'}
                      className={`${styles.text} ${styles.subMenu}`}
                      title={<Link href="#" className={` ${styles.text}`}>Commercial</Link>}
                      id="dropdown10"
                      drop="end"
                    >
                      {(isInnerDropdownVisible === 'dropdown10') && (
                  <>
                  <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/office-blinds-dubai/">Office Blinds Dubai</NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.text} ${styles.menuItem}`} href="/service/outdoor-blinds-dubai/">Outdoor Blinds Dubai</NavDropdown.Item>
                  </>)}
                </NavDropdown>
                {/* Add more fabric types as needed */}
                </>)}
              </NavDropdown>


              <Nav.Link href="/fabric-collection/" className={styles.text1}>Fabric Collection</Nav.Link>
              <Nav.Link href="/gallery/" className={styles.text1}>Gallery</Nav.Link>
              <Nav.Link href="/service/blog/" className={styles.text1}>Blog</Nav.Link>
              <Nav.Link href="/contact-us/" className={styles.text1}>Contact Us</Nav.Link>
            </Nav>

            {/* Right Side: Get A Quote Button */}
            <Link href="/contact-us/">
            <button className="btn btn-primary" style={{ backgroundColor: "#1a808dff" }}>
              Get A Quote
            </button>
            </Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
