import React from "react";

const footerStyles = {
  background: "#060606",
  color: "#fff",
  padding: "40px 0 0 0",
  fontFamily: "inherit",
};

const sectionStyles = {
  flex: 1,
  minWidth: 220,
  margin: "0 20px",
};

const headingStyles = {
  color: "#ffc800",
  fontWeight: "bold",
  marginBottom: "10px",
  fontSize: "1.2rem",
};

const subHeadingStyles = {
  color: "#fff",
  fontWeight: "bold",
  marginBottom: "10px",
  fontSize: "1.1rem",
};

const highlightStyles = {
  color: "#e94bb6",
  fontSize: "2rem",
  fontWeight: "bold",
  marginRight: "8px",
};

const iconStyles = {
  fontSize: "1.7rem",
  color: "#fff",
  marginRight: "15px",
  verticalAlign: "middle",
};

const paymentIconStyles = {
  height: "40px",
  marginRight: "10px",
  verticalAlign: "middle",
};

const Footer = () => (
  <footer style={footerStyles}>
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      marginBottom: "30px"
    }}>
      {/* Left section */}
      <div style={sectionStyles}>
        <div style={headingStyles}>FREE SHIPPING</div>
        <div>Island wide delivery</div>
        <div style={headingStyles}>ONLINE PAYMENT</div>
        <div>Secure transaction</div>
        <div style={headingStyles}>24/7 SUPPORT</div>
        <div>Friendly service</div>
        <div style={headingStyles}>100% SAFE</div>
        <div>Genuine products</div>
      </div>
      {/* Center section */}
      <div style={sectionStyles}>
        <span style={highlightStyles}>BuzzCart</span>
        <span style={{ fontSize: "1rem" }}>
          is an online store established with the aim of providing customers with quality and fresh shopping experience.
        </span>
        <div style={{ marginTop: "20px" }}>
          <span style={iconStyles}><i className="fab fa-facebook"></i></span>
          <span style={iconStyles}><i className="fab fa-pinterest"></i></span>
          <span style={iconStyles}><i className="fab fa-whatsapp"></i></span>
          
        </div>
      </div>
      {/* Right section */}
      <div style={sectionStyles}>
        <div style={subHeadingStyles}>SHOW ROOM</div>
        <div>No. 148, Vauxhall Street, Colombo 2</div>
        <div style={{ color: "#ffc800" }}>+94 71 234 5678</div>
        <div>buzzcartway@gmail.com</div>
        <div>Open 7 Days a Week<br />10AM – 7PM</div>
        
      </div>
      {/* Map section */}
      <div style={sectionStyles}>
        <iframe
          title="Colombo Map"
          src="https://www.google.com/maps?q=Colombo&output=embed"
          width="250"
          height="200"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    {/* Payment icons and copyright */}
    <div style={{
      borderTop: "1px solid #222",
      padding: "20px 0",
      textAlign: "center"
    }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" style={paymentIconStyles} />
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" style={paymentIconStyles} />
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={paymentIconStyles} />
      <div style={{ marginTop: "10px", color: "#fff" }}>
        © 2025 BuzzCart.lk. All rights reserved.
      </div>
    </div>
    {/* FontAwesome CDN for icons */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  </footer>
);

export default Footer;
