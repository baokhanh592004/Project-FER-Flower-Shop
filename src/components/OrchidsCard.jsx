
  import React from 'react';
  import '../styles/Card.css'; // CSS sẽ được cập nhật bên dưới
  
  export default function OrchidsCard({ orchid,  onDetail}) {
    return (
      <div className="card">
        <div
          className="card-image"
          style={{ backgroundImage: `url('${orchid.image}')` }}
        />
        <div className="card-content">
          {/* HIỂN THỊ CÁC BADGE */}
            <div className="card-badges">
              {orchid.isSpecial && <span className="badge special">Special</span>}
              {orchid.isNatuaral && <span className="badge natural">Natural</span>}
            </div>
            
          <h3 className="card-title">{orchid.name}</h3>
          <div className="card-subtitle">{orchid.category}</div>
          <p className="card-description">
            <strong>Rating:</strong> {orchid.rating} <br />
            <strong>Color:</strong> {orchid.color} <br />
            <strong>Origin:</strong> {orchid.origin} <br />
            <strong>Likes:</strong> {orchid.numberOfLike}
          </p>
          
          <div className="card-buttons">
            <button className="btn-secondary" onClick={onDetail}>Details</button>
            <button className="btn-primary">Like</button>
          </div>
        </div>
      </div>
    );
  }
  