import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '-80px' }}>
          <div style={{
            color: 'black', 
            fontSize: '48px', 
            fontFamily: 'Oxygen Mono', 
            fontWeight: 400, 
            wordWrap: 'break-word',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <img 
              src="Group 1.jpg" 
              alt="Eigenverse Logo" 
              style={{
                width: '24px', 
                height: '24px', 
                flexShrink: 0
              }} 
            />
            eigenverse 
          </div>
          <div style={{
            color: 'black', 
            fontSize: '16px', 
            fontFamily: 'Play', 
            fontWeight: 400, 
            wordWrap: 'break-word'
          }}>
            Turning scary equations into aha moments.
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '40px',
          marginBottom: '80px'
        }}>
          <button 
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.9)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'transparent';
              e.target.style.transform = 'scale(1)';
            }}
            style={{
              width: '110px',
              height: '60px',
              background: 'linear-gradient(90deg, #D1E4FD 0%, #D7E6F9 29%)',
              border: '2px solid transparent',
              color: 'black',
              fontSize: '20px',
              fontFamily: 'Oxygen Mono',
              fontWeight: 400,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}>
            learn
          </button>
          <button 
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.9)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'transparent';
              e.target.style.transform = 'scale(1)';
            }}
            style={{
              width: '110px',
              height: '60px',
              background: 'linear-gradient(90deg, #D1E4FD 0%, #D7E6F9 29%)',
              border: '2px solid transparent',
              color: 'black',
              fontSize: '20px',
              fontFamily: 'Oxygen Mono',
              fontWeight: 400,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}>
            log in
          </button>
        </div>

        <div style={{
          color: 'black',
          fontSize: '16px',
          fontFamily: 'Play',
          fontWeight: 400,
          textAlign: 'center',
          maxWidth: '600px',
          background: 'linear-gradient(90deg, #D1E4FD 0%, #D7E6F9 29%)',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          padding: '16px 24px',
          borderRadius: '8px'
        }}>
          Most ML tutorials skip the math.<br />Most math texts skip the ML.<br />We connect the two.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
