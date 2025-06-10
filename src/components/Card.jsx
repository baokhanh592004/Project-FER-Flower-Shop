import React from 'react'
import '../styles/Card.css'; // Đảm bảo đường dẫn đúng

export default function Card() {
  return (
    <section className="hero-section">
      <div className="card-container">
        <div className="card">
          <div
            className="card-background"
            style={{ backgroundImage: "url('https://capgamma8989.up.seesaa.net/image/_media_2023_01_iStock-1135978522-1024x677.jpg')" }}
          />
          <div className="content">
            <div className="card-category">oversize</div>
            <h3 className="card-heading">No Plans For Today Tee</h3>
          </div>
        </div>
        <div className="card">
          <div
            className="card-background"
            style={{ backgroundImage: "url('https://capgamma8989.up.seesaa.net/image/_media_2023_01_iStock-1135978522-1024x677.jpg')" }}
          />
          <div className="content">
            <div className="card-category">hoodie</div>
            <h3 className="card-heading">Boneless Hoodie</h3>
          </div>
        </div>
        <div className="card">
          <div
            className="card-background"
            style={{ backgroundImage: "url('https://capgamma8989.up.seesaa.net/image/_media_2023_01_iStock-1135978522-1024x677.jpg')" }}
          />
          <div className="content">
            <div className="card-category">polo</div>
            <h3 className="card-heading">Cream Polo Sweat</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
