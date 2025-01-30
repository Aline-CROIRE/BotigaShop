import React from 'react';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0072463508!2d-73.99283138467888!3d40.74678297932556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f7b4e8d3%3A0xb5efb320275a9a!2s501-521%20Fashion%20Ave%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2s!4v1625117402958!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;