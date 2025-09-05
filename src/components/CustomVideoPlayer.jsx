import React, { useState } from 'react';

const CustomVideoPlayer = ({ videoId, title, thumbnailImage, width = 400, height = 225 }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: '100%'
      }}>
        <iframe 
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{
            borderRadius: '8px',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    );
  }

  return (
    <div 
      onClick={handlePlay}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: '#1e3a5f',
        borderRadius: '8px',
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%'
      }}
    >
      {/* Play Button */}
      <div style={{
        width: '60px',
        height: '60px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1e3a5f',
        fontSize: '24px',
        marginBottom: '15px'
      }}>
        ▶
      </div>
      
      {/* Video Title */}
      <div style={{
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Orbit',
        fontWeight: '400',
        textAlign: 'center',
        maxWidth: '90%'
      }}>
        {title}
      </div>
    </div>
  );
};

export default CustomVideoPlayer;