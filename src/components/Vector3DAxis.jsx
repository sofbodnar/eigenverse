import React, { useState, useRef } from 'react';

const Vector3DAxis = () => {
  const [rotation, setRotation] = useState({ x: 15, y: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    
    setRotation(prev => ({
      x: Math.max(-30, Math.min(60, prev.x - deltaY * 0.5)), // Limit X rotation
      y: prev.y + deltaX * 0.5 // Free Y rotation
    }));
    
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '500px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'relative',
      perspective: '1000px',
      perspectiveOrigin: 'center center',
      cursor: isDragging ? 'grabbing' : 'grab',
      userSelect: 'none'
    }}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
    >
      <div style={{
        position: 'relative',
        width: '400px',
        height: '400px',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
      }}>
        
        {/* X Axis (Red) - extends along X in 3D space */}
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '3px',
          backgroundColor: 'red',
          left: '200px',
          top: '200px',
          transformOrigin: 'left center',
          transform: 'rotateY(0deg) rotateZ(0deg) translateZ(0px)'
        }}>
          <div style={{
            position: 'absolute',
            right: '-10px',
            top: '-4px',
            width: '0',
            height: '0',
            borderLeft: '10px solid red',
            borderTop: '5px solid transparent',
            borderBottom: '6px solid transparent'
          }} />
          <div style={{
            position: 'absolute',
            right: '-25px',
            top: '-25px',
            fontSize: '18px',
            color: 'red',
            fontFamily: 'Inter',
            fontWeight: 'bold'
          }}>x</div>
        </div>

        {/* Y Axis (Green) - extends along Y in 3D space */}
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '3px',
          backgroundColor: 'green',
          left: '200px',
          top: '200px',
          transformOrigin: 'left center',
          transform: 'rotateY(-90deg) rotateZ(0deg) translateZ(0px)'
        }}>
          <div style={{
            position: 'absolute',
            right: '-10px',
            top: '-4px',
            width: '0',
            height: '0',
            borderLeft: '10px solid green',
            borderTop: '5px solid transparent',
            borderBottom: '6px solid transparent'
          }} />
          <div style={{
            position: 'absolute',
            right: '-25px',
            top: '-25px',
            fontSize: '18px',
            color: 'green',
            fontFamily: 'Inter',
            fontWeight: 'bold'
          }}>y</div>
        </div>

        {/* Z Axis (Blue) - extends along Z in 3D space */}
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '3px',
          backgroundColor: 'blue',
          left: '200px',
          top: '200px',
          transformOrigin: 'left center',
          transform: 'rotateX(90deg) rotateZ(0deg) translateZ(0px)'
        }}>
          <div style={{
            position: 'absolute',
            right: '-10px',
            top: '-4px',
            width: '0',
            height: '0',
            borderLeft: '10px solid blue',
            borderTop: '5px solid transparent',
            borderBottom: '6px solid transparent'
          }} />
          <div style={{
            position: 'absolute',
            right: '-25px',
            top: '-25px',
            fontSize: '18px',
            color: 'blue',
            fontFamily: 'Inter',
            fontWeight: 'bold'
          }}>z</div>
        </div>

        {/* Vectors */}
        {/* Vector a=[1,2,7] */}
        <div style={{
          position: 'absolute',
          width: '99px',
          height: '47px',
          border: '2px #D83D3D solid',
          left: '200px',
          top: '200px',
          transformOrigin: 'top left',
          transform: 'rotate(25deg)'
        }}>
          <div style={{
            position: 'absolute',
            right: '-45px',
            top: '-15px',
            fontSize: '14px',
            color: '#D83D3D',
            fontFamily: 'Inter',
            whiteSpace: 'nowrap'
          }}>a=[1,2,7]</div>
        </div>

        {/* Vector b=[1,0,4] */}
        <div style={{
          position: 'absolute',
          width: '80px',
          height: '35px',
          border: '2px #4ECDC4 solid',
          left: '200px',
          top: '200px',
          transformOrigin: 'top left',
          transform: 'rotate(15deg)'
        }}>
          <div style={{
            position: 'absolute',
            right: '-35px',
            top: '8px',
            fontSize: '14px',
            color: '#4ECDC4',
            fontFamily: 'Inter',
            whiteSpace: 'nowrap'
          }}>b=[1,0,4]</div>
        </div>

        {/* Vector c=[2,3,5] */}
        <div style={{
          position: 'absolute',
          width: '95px',
          height: '42px',
          border: '2px #45B7D1 solid',
          left: '202px',
          top: '202px',
          transformOrigin: 'top left',
          transform: 'rotate(22deg)'
        }}>
          <div style={{
            position: 'absolute',
            right: '-40px',
            top: '8px',
            fontSize: '14px',
            color: '#45B7D1',
            fontFamily: 'Inter',
            whiteSpace: 'nowrap'
          }}>c=[2,3,5]</div>
        </div>

      </div>
    </div>
  );
};

export default Vector3DAxis;