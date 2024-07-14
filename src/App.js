import React from 'react';
import './styles.css'; // Make sure styles.css is in the same directory as your component

export default function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="btn-container">
          <img
            src="https://enspire-iiitl.netlify.app/assets/img/ENspire_IIIT-01.webp"
            alt="ENspire Logo"
            height="50px"
          />
          <button className="signup" style={{ height: '40px', backgroundColor: 'black' }}>
            Contact
          </button>
          <button className="signup" style={{ height: '40px', backgroundColor: 'black' }}>
            Gallery
          </button>
          <button className="signup" style={{ height: '40px', backgroundColor: 'black' }}>
            Teams
          </button>
          <button className="signup" style={{ height: '40px', backgroundColor: 'black' }}>
            Sponsors
          </button>
          <button className="signup" style={{ height: '40px', backgroundColor: 'black' }}>
            Event
          </button>
          <button className="signup" style={{ height: '40px', backgroundColor: 'black' }}>
            Home
          </button>
        </div>
      </nav>

      <div className="sponsor">
        <div className="rotating-box">
          <div className="single-rb">
            <div className="front-side">
              <img
                alt=""
                src="https://www.foodandwine.com/thmb/F5-JcZelGPyaW0ec-TWLTNwlkGk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pepsi-Name-Secret-Meaning-FT-BLOG1123-f51cf9fb425e4bed87381bd68394e672.jpg"
              />
            </div>
            <div className="back-side">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBshLnbaBvfe6QN6mQ55wFmP4V5oqN_ScJTg&s"
              />
            </div>
            <div className="left-side">
              <img
                alt=""
                src="https://assets.upstox.com/ipo/images/logos/doms-%20industries-logo.png"
              />
            </div>
            <div className="right-side">
              <img
                alt=""
                src="https://mir-s3-cdn-cf.behance.net/projects/404/0992ac32720249.Y3JvcCwxMjk2LDEwMTQsMjk4LDExOA.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
