import React from 'react';
import Plot from 'react-plotly.js';

const VectorPlot3D = () => {
  // Vector data from the content
  const vectors = [
    { vector: [2, 3, 5], color: '#FF6B6B', label: 'a=[2,3,5]' },
    { vector: [1, 0, 4], color: '#4ECDC4', label: 'b=[1,0,4]' },
    { vector: [2, 3, 5], color: '#45B7D1', label: 'c=[2,3,5]' }
  ];

  const traces = [];
  
  // Add coordinate axes with arrows
  const axisLength = 7;
  
  // X axis (red)
  traces.push({
    type: 'scatter3d',
    mode: 'lines',
    x: [-axisLength, axisLength],
    y: [0, 0],
    z: [0, 0],
    line: { color: 'red', width: 6 },
    name: 'X axis',
    showlegend: false,
    hoverinfo: 'none'
  });
  
  // X axis arrow
  traces.push({
    type: 'cone',
    x: [axisLength],
    y: [0],
    z: [0],
    u: [1],
    v: [0],
    w: [0],
    colorscale: [[0, 'red'], [1, 'red']],
    showscale: false,
    sizemode: 'absolute',
    sizeref: 0.4,
    showlegend: false,
    hoverinfo: 'none'
  });
  
  // Y axis (green) 
  traces.push({
    type: 'scatter3d',
    mode: 'lines',
    x: [0, 0],
    y: [-axisLength, axisLength],
    z: [0, 0],
    line: { color: 'green', width: 6 },
    name: 'Y axis',
    showlegend: false,
    hoverinfo: 'none'
  });
  
  // Y axis arrow
  traces.push({
    type: 'cone',
    x: [0],
    y: [axisLength],
    z: [0],
    u: [0],
    v: [1],
    w: [0],
    colorscale: [[0, 'green'], [1, 'green']],
    showscale: false,
    sizemode: 'absolute',
    sizeref: 0.4,
    showlegend: false,
    hoverinfo: 'none'
  });
  
  // Z axis (blue)
  traces.push({
    type: 'scatter3d',
    mode: 'lines',
    x: [0, 0],
    y: [0, 0],
    z: [-axisLength, axisLength],
    line: { color: 'blue', width: 6 },
    name: 'Z axis',
    showlegend: false,
    hoverinfo: 'none'
  });
  
  // Z axis arrow
  traces.push({
    type: 'cone',
    x: [0],
    y: [0],
    z: [axisLength],
    u: [0],
    v: [0],
    w: [1],
    colorscale: [[0, 'blue'], [1, 'blue']],
    showscale: false,
    sizemode: 'absolute',
    sizeref: 0.4,
    showlegend: false,
    hoverinfo: 'none'
  });
  
  // Add vectors
  vectors.forEach((vectorData, index) => {
    const [x, y, z] = vectorData.vector;
    
    // Vector line from origin to point
    traces.push({
      type: 'scatter3d',
      mode: 'lines',
      x: [0, x],
      y: [0, y],
      z: [0, z],
      line: {
        color: vectorData.color,
        width: 8
      },
      name: vectorData.label,
      showlegend: true,
      hoverinfo: 'name'
    });
    
    // Vector arrow head
    traces.push({
      type: 'cone',
      x: [x],
      y: [y],
      z: [z],
      u: [x * 0.15],
      v: [y * 0.15],
      w: [z * 0.15],
      colorscale: [[0, vectorData.color], [1, vectorData.color]],
      showscale: false,
      sizemode: 'absolute',
      sizeref: 0.3,
      showlegend: false,
      hoverinfo: 'none'
    });
  });

  const layout = {
    scene: {
      xaxis: {
        title: { text: 'x', font: { color: 'red', size: 16 } },
        range: [-6, 6],
        showgrid: false,
        showline: false,
        zeroline: false,
        showticklabels: true,
        tickmode: 'linear',
        dtick: 1,
        showbackground: false,
        tickfont: { color: 'red', size: 12 },
        titlefont: { color: 'red', size: 16 }
      },
      yaxis: {
        title: { text: 'y', font: { color: 'green', size: 16 } },
        range: [-6, 6],
        showgrid: false,
        showline: false,
        zeroline: false,
        showticklabels: true,
        tickmode: 'linear',
        dtick: 1,
        showbackground: false,
        tickfont: { color: 'green', size: 12 },
        titlefont: { color: 'green', size: 16 }
      },
      zaxis: {
        title: { text: 'z', font: { color: 'blue', size: 16 } },
        range: [-6, 6],
        showgrid: false,
        showline: false,
        zeroline: false,
        showticklabels: true,
        tickmode: 'linear',
        dtick: 1,
        showbackground: false,
        tickfont: { color: 'blue', size: 12 },
        titlefont: { color: 'blue', size: 16 }
      },
      camera: {
        eye: { x: 1.8, y: 1.8, z: 1.8 },
        up: { x: 0, y: 0, z: 1 },
        center: { x: 0, y: 0, z: 0 },
        projection: { type: 'perspective' }
      },
      bgcolor: 'rgba(0,0,0,0)',
      aspectmode: 'cube',
      dragmode: 'orbit'
    },
    width: 800,
    height: 600,
    margin: { l: 50, r: 50, t: 50, b: 50 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    legend: {
      x: 0,
      y: 1,
      bgcolor: 'rgba(255,255,255,0.8)',
      font: {
        family: 'Inter',
        size: 12,
        color: '#333'
      }
    }
  };

  const config = {
    displayModeBar: false,
    displaylogo: false,
    responsive: true,
    scrollZoom: true,
    staticPlot: false,
    doubleClick: 'reset',
    showTips: false,
    showAxisDragHandles: false,
    showAxisRangeEntryBoxes: false,
    editable: false
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      width: '100%',
      padding: '20px 0'
    }}>
      <Plot
        data={traces}
        layout={layout}
        config={config}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default VectorPlot3D;