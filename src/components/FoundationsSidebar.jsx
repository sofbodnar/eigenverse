import React, { useState } from 'react';
import './FoundationsSidebar.css';

const FoundationsSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const foundationsData = {
    '1.1': {
      title: 'Linear Algebra',
      subtopics: [
        { id: '1.1.1', title: 'Vectors' },
        { id: '1.1.2', title: 'Matrices' },
        { id: '1.1.3', title: 'Eigenvalues/Eigenvectors' },
        { id: '1.1.4', title: 'SVD' },
        { id: '1.1.5', title: 'Multi-vector Embeddings' }
      ]
    },
    '1.2': {
      title: 'Vector Norms & Similarity',
      subtopics: [
        { id: '1.2.1', title: 'Dot Product' },
        { id: '1.2.2', title: 'Cosine Similarity' },
        { id: '1.2.3', title: 'Chamfer Similarity' }
      ]
    },
    '1.3': {
      title: 'Calculus',
      subtopics: [
        { id: '1.3.1', title: 'Gradients' },
        { id: '1.3.2', title: 'Chain Rule' },
        { id: '1.3.3', title: 'Jacobians' },
        { id: '1.3.4', title: 'Hessians' }
      ]
    },
    '1.4': {
      title: 'Probability & Statistics',
      subtopics: [
        { id: '1.4.1', title: 'Random Variables' },
        { id: '1.4.2', title: 'Distributions' },
        { id: '1.4.3', title: 'Expectation' },
        { id: '1.4.4', title: 'Variance' }
      ]
    },
    '1.5': {
      title: 'Optimization',
      subtopics: [
        { id: '1.5.1', title: 'Gradient Descent' },
        { id: '1.5.2', title: 'Convexity' },
        { id: '1.5.3', title: 'Lagrange Multipliers' }
      ]
    },
    '1.6': {
      title: 'Information Theory',
      subtopics: [
        { id: '1.6.1', title: 'Entropy' },
        { id: '1.6.2', title: 'KL Divergence' },
        { id: '1.6.3', title: 'Cross-entropy' }
      ]
    },
    '1.7': {
      title: 'Numerical Methods',
      subtopics: [
        { id: '1.7.1', title: 'Approximation' },
        { id: '1.7.2', title: 'Floating-point Errors' },
        { id: '1.7.3', title: 'Iterative Methods' },
        { id: '1.7.4', title: 'Random Projections (Johnson-Lindenstrauss lemma)' },
        { id: '1.7.5', title: 'Locality-Sensitive Hashing (probabilistic bucketing)' }
      ]
    }
  };

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  return (
    <div className="foundations-sidebar">
      <div className="sidebar-header">
        <h2>Foundations</h2>
      </div>
      
      <div className="sidebar-content">
        {Object.entries(foundationsData).map(([key, section]) => (
          <div key={key} className="sidebar-section">
            <div 
              className="section-header" 
              onClick={() => toggleSection(key)}
            >
              <span className="section-number">{key}</span>
              <span className="section-title">{section.title}</span>
              <span className={`expand-icon ${expandedSections[key] ? 'expanded' : ''}`}>
                ▼
              </span>
            </div>
            
            {expandedSections[key] && (
              <div className="subtopics">
                {section.subtopics.map((subtopic) => (
                  <div key={subtopic.id} className="subtopic">
                    <span className="subtopic-arrow">→</span>
                    <span className="subtopic-number">{subtopic.id}</span>
                    <span className={`subtopic-title ${subtopic.emphasized ? 'emphasized' : ''}`}>
                      {subtopic.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundationsSidebar;