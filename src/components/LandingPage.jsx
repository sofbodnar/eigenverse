import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      {/* User Profile Component in top right */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 10,
        display: 'flex',
        gap: '12px'
      }}>
        {/* Download Button */}
        <div style={{
          width: '117px',
          height: '47px',
          border: '1px solid #BAC3D0',
          background: 'rgba(217, 217, 217, 0.00)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          <span style={{
            color: '#8598AE',
            fontSize: '14px',
            fontFamily: 'Play',
            fontWeight: 400
          }}>
            Download
          </span>
        </div>

        {/* User Profile Button */}
        <div style={{
          width: '117px',
          height: '47px',
          border: '1px solid #A2C5F4',
          background: 'rgba(217, 217, 217, 0.00)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 8px 0 12px',
          borderRadius: '8px'
        }}>
          {/* User Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M33.3334 35V31.6667C33.3334 29.8986 32.631 28.2029 31.3807 26.9526C30.1305 25.7024 28.4348 25 26.6667 25H13.3334C11.5652 25 9.86955 25.7024 8.61931 26.9526C7.36907 28.2029 6.66669 29.8986 6.66669 31.6667V35M26.6667 11.6667C26.6667 15.3486 23.6819 18.3333 20 18.3333C16.3181 18.3333 13.3334 15.3486 13.3334 11.6667C13.3334 7.98477 16.3181 5 20 5C23.6819 5 26.6667 7.98477 26.6667 11.6667Z" stroke="#A4BEE0" strokeOpacity="0.86" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          {/* Three lines */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            marginRight: '8px'
          }}>
            <div style={{
              width: '23px',
              height: '1px',
              background: 'rgba(177, 197, 223, 0.59)'
            }}></div>
            <div style={{
              width: '23px',
              height: '1px',
              background: 'rgba(177, 197, 223, 0.59)'
            }}></div>
            <div style={{
              width: '23px',
              height: '1px',
              background: 'rgba(177, 197, 223, 0.59)'
            }}></div>
          </div>
        </div>
      </div>

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
            <svg 
              width="55" 
              height="55" 
              viewBox="0 0 55 55"
              style={{
                flexShrink: 0,
                alignSelf: 'flex-end',
                marginBottom: '-5px'
              }}
            >
              {/* Outer circle */}
              <circle 
                cx="27.5" 
                cy="27.5" 
                r="25" 
                fill="none" 
                stroke="#BCD4F3" 
                strokeWidth="2"
              />
              
              {/* Inscribed trapezoid with all corners touching circle */}
              <defs>
                <linearGradient id="trapezoid_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A2C5F4"/>
                  <stop offset="50%" stopColor="#BCD4F3"/>
                  <stop offset="100%" stopColor="#ECF4FB"/>
                </linearGradient>
              </defs>
              
              {/* Trapezoid with all corners exactly on circle circumference */}
              <polygon 
                points="9.82,10.18 45.18,10.18 42.68,44.82 12.32,44.82" 
                fill="none" 
                stroke="url(#trapezoid_gradient)" 
                strokeWidth="1"
              />
              
              {/* Diagonal line across trapezoid */}
              <line 
                x1="9.82" 
                y1="10.18" 
                x2="42.68" 
                y2="44.82" 
                stroke="url(#trapezoid_gradient)" 
                strokeWidth="0.8"
                opacity="0.7"
              />
            </svg>
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
            onClick={() => {
              document.getElementById('topics-section').scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
            style={{
              width: '110px',
              height: '60px',
              background: 'linear-gradient(90deg, #F8FBFE 0%, #F0F7FE 29%)',
              border: '2px solid #BCD4F3',
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
            onClick={() => navigate('/signin')}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
            style={{
              width: '110px',
              height: '60px',
              background: 'linear-gradient(90deg, #F8FBFE 0%, #F0F7FE 29%)',
              border: '2px solid #BCD4F3',
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
          background: 'linear-gradient(90deg, #F8FBFE 0%, #F0F7FE 29%)',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          padding: '16px 24px',
          borderRadius: '8px'
        }}>
          Most ML tutorials skip the math.<br />Most math texts skip the ML.<br />Eigenverse connects the two.
        </div>
      </div>

      {/* Search Section */}
      <div style={{
        minHeight: '60vh',
        padding: '20px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>
        {/* Search Bar */}
        <div style={{ 
          width: window.innerWidth <= 768 ? '400px' : '600px', 
          height: window.innerWidth <= 768 ? '48px' : '52px', 
          marginBottom: window.innerWidth <= 768 ? '40px' : '60px' 
        }}>
          <div 
            data-show-1st-trailing-icon="true" 
            data-show-2nd-trailing-icon="false" 
            data-show-avatar="False" 
            data-show-leading-icon="true" 
            data-state="Enabled" 
            style={{
              width: '100%', 
              height: '100%', 
              background: 'rgba(143.83, 176.65, 203.51, 0.21)', 
              overflow: 'hidden', 
              borderRadius: '28px', 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              gap: '4px', 
              display: 'inline-flex'
            }}
          >
            <div style={{
              flex: '1 1 0', 
              alignSelf: 'stretch', 
              padding: '4px', 
              position: 'relative', 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              display: 'flex'
            }}>
              <div style={{
                left: '4px', 
                top: '4px', 
                position: 'absolute', 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                display: 'flex'
              }}>
                <div 
                  data-size="Small" 
                  data-style="Standard" 
                  data-type="Round" 
                  data-width="Default" 
                  style={{
                    display: 'flex',
                    width: '48px',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div 
                    data-state="Enabled" 
                    style={{
                      width: '40px', 
                      overflow: 'hidden', 
                      borderRadius: '100px', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div style={{
                      alignSelf: 'stretch', 
                      height: '40px', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}>
                      <div style={{ width: '24px', height: '24px', position: 'relative' }}>
                        {/* Search icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}>
                          <circle cx="11" cy="11" r="8" stroke="#8598AE" strokeWidth="2"/>
                          <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#8598AE" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                flex: '1 1 0', 
                alignSelf: 'stretch', 
                paddingLeft: '60px', 
                paddingRight: '20px', 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                gap: '10px', 
                display: 'flex'
              }}>
                <input 
                  type="text"
                  placeholder="search"
                  style={{
                    border: 'none',
                    background: 'transparent',
                    outline: 'none',
                    width: '100%',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#8598AE',
                    fontSize: '16px',
                    fontFamily: 'Orbit',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.50px',
                    wordWrap: 'break-word'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Topic Tags Grid */}
        <div id="topics-section" style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: window.innerWidth <= 768 ? '16px' : '20px',
          maxWidth: window.innerWidth <= 768 ? '400px' : '1200px',
          width: '100%',
          marginBottom: '40px'
        }}>
          {[
            'foundations',
            'neural networks',
            'probabilistic models',
            'reinforcement learning',
            'memory models',
            'multi modal & foundation models',
            'contrastive learning',
            'diffusion models',
            'advanced topics'
          ].map((topic, index) => (
            <div
              key={index}
              data-show-1st-trailing-icon="true" 
              data-show-2nd-trailing-icon="false" 
              data-show-avatar="False" 
              data-show-leading-icon="false" 
              data-state="Enabled"
              style={{
                display: 'flex',
                width: window.innerWidth <= 768 ? '100%' : '373.34px',
                padding: '17px 17px 41.01px 17px',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3.99px',
                borderRadius: '4px',
                border: '1px solid #E5E5E5',
                background: 'linear-gradient(135deg, #F2F7FC 0%, #E6F0F9 50%, #E0EBF7 100%)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                transform: 'scale(1)',
                position: 'relative',
                zIndex: 2
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.border = '1px solid #CCCCCC';
                e.currentTarget.style.background = 'linear-gradient(135deg, #EBF2F9 0%, #DCE7F5 50%, #D6E2F3 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.border = '1px solid #E5E5E5';
                e.currentTarget.style.background = 'linear-gradient(135deg, #F2F7FC 0%, #E6F0F9 50%, #E0EBF7 100%)';
              }}
              onClick={() => {
                const topicUrl = topic.replace(/\s+/g, '-').replace(/&/g, '').toLowerCase();
                navigate(`/topic/${topicUrl}`);
              }}
            >
              <div style={{
                flex: '1 1 0',
                alignSelf: 'stretch',
                padding: '18px 8px 8px 8px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
              }}>
                <span style={{
                  color: 'black',
                  fontSize: window.innerWidth <= 768 ? '14px' : '18px',
                  fontFamily: 'Play',
                  fontWeight: 400,
                  wordWrap: 'break-word',
                  textAlign: 'center',
                  lineHeight: window.innerWidth <= 768 ? '1.2' : '1'
                }}>
                  {topic}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Suggestion Text */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <span style={{
            color: '#6B8AA6',
            fontSize: '14px',
            fontFamily: 'Play',
            fontWeight: 400
          }}>
            have suggestions? 
          </span>
          <a 
            href="mailto:suggestions@eigenverse.com"
            style={{
              color: '#6B8AA6',
              fontSize: '14px',
              fontFamily: 'Play',
              fontWeight: 400,
              textDecoration: 'underline',
              marginLeft: '4px',
              cursor: 'pointer'
            }}
          >
            send your idea here
          </a>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#6B8AA6',
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
            e.target.style.color = '#6B8AA6';
            e.target.style.transform = 'scale(1)';
            e.target.style.textShadow = 'none';
          }}
          style={{
            color: '#6B8AA6',
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
