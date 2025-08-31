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
              background: 'linear-gradient(90deg, #F8FBFE 0%, #F0F7FE 29%)',
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
              background: 'linear-gradient(90deg, #F8FBFE 0%, #F0F7FE 29%)',
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
        minHeight: '100vh',
        padding: '80px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>
        {/* Search Bar */}
        <div style={{ 
          width: window.innerWidth <= 768 ? '300px' : '400px', 
          height: window.innerWidth <= 768 ? '48px' : '56px', 
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
              <div 
                data-size="Small" 
                data-style="Standard" 
                data-type="Round" 
                data-width="Default" 
                style={{
                  width: '48px', 
                  height: '48px', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  display: 'flex'
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
                      <div style={{
                        width: '18px', 
                        height: '12px', 
                        left: '3px', 
                        top: '6px', 
                        position: 'absolute', 
                        background: '#8598AE'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                flex: '1 1 0', 
                alignSelf: 'stretch', 
                paddingLeft: '20px', 
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
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.50px',
                    wordWrap: 'break-word'
                  }}
                />
              </div>
              <div style={{
                right: '4px', 
                top: '4px', 
                position: 'absolute', 
                justifyContent: 'flex-end', 
                alignItems: 'center', 
                display: 'flex'
              }}>
                <div 
                  data-size="Small" 
                  data-style="Standard" 
                  data-type="Round" 
                  data-width="Default" 
                  style={{
                    width: '48px', 
                    height: '48px', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    display: 'flex'
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
                        <div style={{
                          width: '18px', 
                          height: '18px', 
                          left: '3px', 
                          top: '3px', 
                          position: 'absolute', 
                          background: '#8598AE'
                        }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Topic Tags Grid */}
        <div id="topics-section" style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: window.innerWidth <= 768 ? '16px' : '20px',
          maxWidth: window.innerWidth <= 768 ? '400px' : '800px',
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
                width: '100%',
                height: '100%',
                background: topic === 'foundations' ? 'rgba(160.32, 177.29, 245.19, 0.26)' : 
                           topic === 'neural networks' ? 'rgba(158.08, 183.12, 220.67, 0.26)' : 
                           topic === 'probabilistic models' ? 'rgba(142.19, 200.42, 236.61, 0.26)' : 
                           topic === 'reinforcement learning' ? 'rgba(161.32, 203.70, 208.41, 0.25)' : 
                           topic === 'memory models' ? 'rgba(110.90, 212.25, 240.29, 0.26)' : 
                           topic === 'multi modal & foundation models' ? 'rgba(187.49, 176.74, 192.48, 0.26)' : 
                           topic === 'contrastive learning' ? 'rgba(142.19, 200.42, 236.61, 0.26)' : 
                           topic === 'diffusion models' ? 'rgba(196.24, 195.18, 226.80, 0.26)' : 
                           topic === 'advanced topics' ? 'rgba(137.07, 164.17, 186.35, 0.17)' : 
                           'rgba(255, 255, 255, 0.3)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                overflow: 'hidden',
                borderRadius: '28px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '4px',
                display: 'inline-flex',
                cursor: 'pointer',
                minHeight: window.innerWidth <= 768 ? '48px' : '64px',
                padding: window.innerWidth <= 768 ? '12px 16px' : '16px 20px',
                transition: 'all 0.2s ease',
                transform: 'scale(1)',
                position: 'relative',
                zIndex: 2
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.border = '3px solid rgba(255, 255, 255, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.4)';
              }}
            >
              <div style={{
                flex: '1 1 0',
                alignSelf: 'stretch',
                padding: '8px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
              }}>
                <span style={{
                  color: '#8598AE',
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
