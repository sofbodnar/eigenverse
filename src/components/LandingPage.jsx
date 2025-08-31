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
            fontFamily: 'Orbit', 
            fontWeight: 400, 
            wordWrap: 'break-word',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '12px',
            paddingLeft: '0px',
            marginLeft: '-50px',
            marginBottom: '16px'
          }}>
            <img 
              src="Screenshot 2025-08-31 at 15.00.15.png" 
              alt="Eigenverse Logo" 
              style={{
                width: '55px', 
                height: '55px', 
                flexShrink: 0,
                alignSelf: 'flex-end',
                marginBottom: '-5px'
              }} 
            />
            eigenverse 
          </div>
          <div style={{
            color: '#8598AE', 
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
              border: '2px solid rgba(255, 255, 255, 0.6)',
              color: 'black',
              fontSize: '20px',
              fontFamily: 'Oxygen Mono',
              fontWeight: 400,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              borderRadius: '4px'
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
              border: '2px solid rgba(255, 255, 255, 0.6)',
              color: 'black',
              fontSize: '20px',
              fontFamily: 'Oxygen Mono',
              fontWeight: 400,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              borderRadius: '4px'
            }}>
            log in
          </button>
        </div>

        <div style={{
          color: '#8598AE',
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
          Most ML tutorials skip the math.<br />Most math texts skip the ML.<br />Eigenverse connects the two.
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Play',
        fontWeight: 400,
        textAlign: 'center'
      }}>
        made with <span style={{color: '#A2C5F4'}}>💙</span> by{' '}
        <a 
          href="https://www.linkedin.com/in/sofiia-bodnar/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => {
            e.target.style.color = '#A2C5F4';
            e.target.style.transform = 'scale(1.05)';
            e.target.style.textShadow = '0 0 8px rgba(162, 197, 244, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white';
            e.target.style.transform = 'scale(1)';
            e.target.style.textShadow = 'none';
          }}
          style={{
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            cursor: 'pointer'
          }}
        >
          Sofia Bodnar
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
