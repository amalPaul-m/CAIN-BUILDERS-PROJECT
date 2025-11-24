import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 
import './connectWhatsapp.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919895551323" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp className="whatsapp-icon" />
      Connect
    </a>
  );
};

export default WhatsAppButton;
