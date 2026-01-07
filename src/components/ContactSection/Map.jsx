import React from "react";
import { Container } from "@mui/material";
const Map = () => {
  return (
    <>
    <Container maxWidth="lg" sx={{ py: 4 }}>
        
      <div
        className="map-container"
        style={{
        
          borderRadius:"20px",
          
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316f11c7a5%3A0x25a4e4b3a9c3c7b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1618863467554!5m2!1sen!2sus"
          width="100%"
          height="450px"
          borderRadius="40px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

    
    </Container>
    </>
  );
};

export default Map;
