import React from 'react';
const ServiceCard = ({ title, description, image, price }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card-image" />
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        <p className="service-card-price">{price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

