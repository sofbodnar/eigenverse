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
    },
    '1.8': {
      title: 'Linear Regression',
      subtopics: [
        { id: '1.8.1', title: 'Model Basics' },
        { id: '1.8.2', title: 'Loss Function / Cost' },
        { id: '1.8.3', title: 'Analytical Solution' },
        { id: '1.8.4', title: 'Gradient Descent' },
        { id: '1.8.5', title: 'Feature Scaling & Normalization' },
        { id: '1.8.6', title: 'Evaluation Metrics' },
        { id: '1.8.7', title: 'Regularization (Lasso & Ridge)' },
        { id: '1.8.8', title: 'Extensions & Connections' }
      ]
    },
    '1.9': {
      title: 'Dimensionality Reduction',
      subtopics: [
        { id: '1.9.1', title: 'Introduction & Motivation' },
        { id: '1.9.2', title: 'Principal Component Analysis (PCA)' },
        { id: '1.9.3', title: 'Singular Value Decomposition (SVD)' },
        { id: '1.9.4', title: 'Linear Discriminant Analysis (LDA)' },
        { id: '1.9.5', title: 't-Distributed Stochastic Neighbor Embedding (t-SNE)' },
        { id: '1.9.6', title: 'Uniform Manifold Approximation and Projection (UMAP)' },
        { id: '1.9.7', title: 'Feature Selection vs Feature Extraction' },
        { id: '1.9.8', title: 'Applications in Machine Learning' }
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
        <p className="subtitle">easy stuff</p>
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