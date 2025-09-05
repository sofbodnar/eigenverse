import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FoundationsSidebar from './FoundationsSidebar';
import Vector3DAxis from './Vector3DAxis';
import CustomVideoPlayer from './CustomVideoPlayer';
import MathComponent from './Math';
import './TopicPage.css';

const TopicPage = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState(null);
  const [mathSectionOpen, setMathSectionOpen] = useState(null); // 'mathy', 'nomath', or null
  const [completedTopics, setCompletedTopics] = useState(() => {
    // Load from localStorage on init
    const saved = localStorage.getItem('eigenverse-progress');
    return saved ? JSON.parse(saved) : [];
  });
  const [progressBarPosition, setProgressBarPosition] = useState(() => {
    // Load position from localStorage on init
    const saved = localStorage.getItem('eigenverse-progress-bar-position');
    return saved ? JSON.parse(saved) : { x: 0, y: -15 };
  });
  const [isDragging, setIsDragging] = useState(false);

  // Content data for different sections
  const contentData = {
    '1.1': {
      title: '1.1 Linear Algebra',
      subtitle: 'must knows',
      description: 'Before going into all the complex math of ML you need to understand the basics of linear algebra. Mastering these basics will make it much easier to understand how algorithms like PCA, linear regression, and neural networks work.',
      sections: [
        {
          id: '1.1.1',
          title: '1.1.1 Vectors',
          definition: 'def: vectors are certain objects that satisfy the following properties;',
          properties: [
            'they can be added together',
            'they can be multiplied by a scalar'
          ],
          explanation: 'In ML, you can think of a vector as a list of ordered numbers that represent features of some object. These features could describe:\n→ a point in space,\n→ properties of an image,\n→ or even the meaning of a word or sentence:',
          example: 'Suppose we want to represent the phrase "Hello Eigenverse" so that a machine learning model can understand it. Computers don\'t "see" words. They need numbers.\n\nAn embedding model takes the phrase "Hello Eigenverse" and turns it into a vector, like this:\n\nv = [0.12, −0.87, 0.33, 0.44, −0.09, …, 0.51]\n\n(This might be a 128-dimensional vector, so imagine a long list of numbers) Each number encodes some aspect of the word\'s meaning, learned from huge amounts of text.'
        },
        {
          id: '1.1.2',
          title: '1.1.2 Vector Databases',
          explanation: 'A vector database stores millions or even billions of vectors, each representing an object (like a sentence, an image, or a user profile). Instead of storing text or images directly, it stores their numeric embeddings, which are easier for machines to compare.\n\nWhen you query the database, your query is converted into a vector. The database then finds vectors closest in distance to your query vector. This allows you to find:\n→ Text with similar meaning ("Hello Eigenverse" ≈ "Hello Mathlete")\n→ Images with similar content\n→ User profiles with similar behavior or preferences\n\nComparing every vector in a huge database is too slow. Vector databases use specialized indexing structures like ball trees or locality-sensitive hashing (LSH), which allow them to quickly find approximate nearest neighbors without checking every vector. This trades a tiny bit of accuracy for a huge speedup.'
        },
        {
          id: '1.1.3',
          title: '1.1.3 Matrices',
          definition: 'def: a matrix is a rectangular array of numbers arranged in rows and columns<br><br><strong>def 2 (the mathy version):</strong> With m,n∈ℕ a real-valued (m,n) matrix A is an m·n-tuple of elements aᵢⱼ, i = 1,...,m, j = 1,...,n, which is ordered according to a rectangular scheme consisting of m rows and n columns:',
          mathDefinition: 'A = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{bmatrix}',
          mathNote: 'where \\, a_{ij} \\in \\mathbb{R}',
          explanation: 'Think of a matrix as a grid of numbers, where each number has a specific position defined by its row and column. If you think of vectors as single lists of numbers, a matrix can be seen as a collection of vectors stacked together:\n→ Columns as vectors: Each column can represent a vector.\n→ Rows as vectors: Each row can also represent a vector.\n\nIn machine learning, matrices let us perform operations on many data points simultaneously.\n\nFor example, if you have data about 1000 customers with 10 features each, you can store this as a 1000×10 matrix where:\n→ Each row represents one customer\n→ Each column represents one feature (age, income, etc.)\n→ You can process all customers at once using matrix operations\n\nMatrix multiplication is <strong>ESPECIALLY</strong> important in ML. When you multiply two matrices, you\'re essentially combining transformations. For instance, in neural networks:\nInput data (matrix) × Weights (matrix) = Output (matrix)\nThis happens at every layer, and GPUs accelerate these operations for speed.'
        },
        {
          id: '1.1.4',
          title: '1.1.4 Eigenvalues/Eigenvectors',
          definition: 'Coming soon...'
        }
      ]
    },
    '1.2': {
      title: '1.2 Embeddings',
      subtitle: 'vector representations',
      description: 'Learn how to represent complex data as vectors.',
      sections: [
        { id: '1.2.1', title: '1.2.1 Single Vector Embeddings', definition: 'Coming soon...' },
        { id: '1.2.2', title: '1.2.2 Multi-vector Embeddings', definition: 'Coming soon...' },
        { id: '1.2.3', title: '1.2.3 Word Embeddings', definition: 'Coming soon...' }
      ]
    },
    '1.3': {
      title: '1.3 Vector Norms & Similarity',
      subtitle: 'measuring distances',
      description: 'Understand how to measure similarity between vectors.',
      sections: [
        { id: '1.3.1', title: '1.3.1 Dot Product', definition: 'Coming soon...' },
        { id: '1.3.2', title: '1.3.2 Cosine Similarity', definition: 'Coming soon...' },
        { id: '1.3.3', title: '1.3.3 Chamfer Similarity', definition: 'Coming soon...' }
      ]
    },
    '1.4': {
      title: '1.4 Calculus',
      subtitle: 'optimization basics',
      description: 'Essential calculus concepts for machine learning.',
      sections: [
        { id: '1.4.1', title: '1.4.1 Gradients', definition: 'Coming soon...' },
        { id: '1.4.2', title: '1.4.2 Chain Rule', definition: 'Coming soon...' },
        { id: '1.4.3', title: '1.4.3 Jacobians', definition: 'Coming soon...' },
        { id: '1.4.4', title: '1.4.4 Hessians', definition: 'Coming soon...' }
      ]
    },
    '1.5': {
      title: '1.5 Probability & Statistics',
      subtitle: 'uncertainty modeling',
      description: 'Fundamental concepts for handling uncertainty in ML.',
      sections: [
        { id: '1.5.1', title: '1.5.1 Random Variables', definition: 'Coming soon...' },
        { id: '1.5.2', title: '1.5.2 Distributions', definition: 'Coming soon...' },
        { id: '1.5.3', title: '1.5.3 Expectation', definition: 'Coming soon...' },
        { id: '1.5.4', title: '1.5.4 Variance', definition: 'Coming soon...' }
      ]
    },
    '1.6': {
      title: '1.6 Optimization',
      subtitle: 'finding the best',
      description: 'Methods for finding optimal solutions.',
      sections: [
        { id: '1.6.1', title: '1.6.1 Gradient Descent', definition: 'Coming soon...' },
        { id: '1.6.2', title: '1.6.2 Convexity', definition: 'Coming soon...' },
        { id: '1.6.3', title: '1.6.3 Lagrange Multipliers', definition: 'Coming soon...' }
      ]
    },
    '1.7': {
      title: '1.7 Information Theory',
      subtitle: 'measuring information',
      description: 'Concepts for quantifying information and uncertainty.',
      sections: [
        { id: '1.7.1', title: '1.7.1 Entropy', definition: 'Coming soon...' },
        { id: '1.7.2', title: '1.7.2 KL Divergence', definition: 'Coming soon...' },
        { id: '1.7.3', title: '1.7.3 Cross-entropy', definition: 'Coming soon...' }
      ]
    },
    '1.8': {
      title: '1.8 Numerical Methods',
      subtitle: 'computational techniques',
      description: 'Practical methods for numerical computation.',
      sections: [
        { id: '1.8.1', title: '1.8.1 Approximation', definition: 'Coming soon...' },
        { id: '1.8.2', title: '1.8.2 Floating-point Errors', definition: 'Coming soon...' },
        { id: '1.8.3', title: '1.8.3 Iterative Methods', definition: 'Coming soon...' },
        { id: '1.8.4', title: '1.8.4 Random Projections (Johnson-Lindenstrauss lemma)', definition: 'Coming soon...' },
        { id: '1.8.5', title: '1.8.5 Locality-Sensitive Hashing (probabilistic bucketing)', definition: 'Coming soon...' }
      ]
    },
    '1.9': {
      title: '1.9 Linear Regression',
      subtitle: 'basic prediction',
      description: 'Foundational supervised learning technique.',
      sections: [
        { id: '1.9.1', title: '1.9.1 Model Basics', definition: 'Coming soon...' },
        { id: '1.9.2', title: '1.9.2 Loss Function / Cost', definition: 'Coming soon...' },
        { id: '1.9.3', title: '1.9.3 Analytical Solution', definition: 'Coming soon...' },
        { id: '1.9.4', title: '1.9.4 Gradient Descent', definition: 'Coming soon...' },
        { id: '1.9.5', title: '1.9.5 Feature Scaling & Normalization', definition: 'Coming soon...' },
        { id: '1.9.6', title: '1.9.6 Evaluation Metrics', definition: 'Coming soon...' },
        { id: '1.9.7', title: '1.9.7 Regularization (Lasso & Ridge)', definition: 'Coming soon...' }
      ]
    },
    '1.10': {
      title: '1.10 Dimensionality Reduction',
      subtitle: 'simplifying data',
      description: 'Techniques for reducing data complexity.',
      sections: [
        { id: '1.10.1', title: '1.10.1 Principal Component Analysis (PCA)', definition: 'Coming soon...' },
        { id: '1.10.2', title: '1.10.2 Singular Value Decomposition (SVD)', definition: 'Coming soon...' },
        { id: '1.10.3', title: '1.10.3 Linear Discriminant Analysis (LDA)', definition: 'Coming soon...' },
        { id: '1.10.4', title: '1.10.4 t-Distributed Stochastic Neighbor Embedding (t-SNE)', definition: 'Coming soon...' },
        { id: '1.10.5', title: '1.10.5 Uniform Manifold Approximation and Projection (UMAP)', definition: 'Coming soon...' },
        { id: '1.10.6', title: '1.10.6 Feature Selection vs Feature Extraction', definition: 'Coming soon...' },
        { id: '1.10.7', title: '1.10.7 Applications in Machine Learning', definition: 'Coming soon...' }
      ]
    }
  };

  const handleContentSelect = (contentId, title) => {
    setSelectedContent(contentId);
  };

  const toggleMathSection = (sectionType) => {
    if (mathSectionOpen === sectionType) {
      setMathSectionOpen(null); // Close if same section is clicked
    } else {
      setMathSectionOpen(sectionType); // Open the clicked section, close others
    }
  };

  const markTopicComplete = (topicId) => {
    const newCompleted = [...completedTopics];
    if (!newCompleted.includes(topicId)) {
      newCompleted.push(topicId);
      setCompletedTopics(newCompleted);
      localStorage.setItem('eigenverse-progress', JSON.stringify(newCompleted));
    }
  };

  const markTopicIncomplete = (topicId) => {
    const newCompleted = completedTopics.filter(id => id !== topicId);
    setCompletedTopics(newCompleted);
    localStorage.setItem('eigenverse-progress', JSON.stringify(newCompleted));
  };

  // Get all topic IDs for progress calculation - from ALL subsections in foundations
  const getAllTopicIds = () => {
    const allIds = [];
    Object.values(contentData).forEach(topic => {
      if (topic.sections) {
        topic.sections.forEach(section => {
          allIds.push(section.id);
        });
      }
    });
    return allIds;
  };

  const calculateProgress = () => {
    const allTopics = getAllTopicIds();
    return allTopics.length > 0 ? (completedTopics.length / allTopics.length) * 100 : 0;
  };

  // Drag handlers for progress bar
  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const headerRect = e.currentTarget.closest('.header-controls').getBoundingClientRect();
    const progressBarWidth = 300; // Approximate width of progress bar
    const progressBarHeight = 50; // Approximate height of progress bar
    
    // Calculate new position with constraints to keep within header
    let newX = e.clientX - headerRect.left - 150; // Offset for progress bar center
    let newY = e.clientY - headerRect.top - 15;   // Offset for progress bar height
    
    // Constrain to header bounds
    newX = Math.max(0, Math.min(newX, headerRect.width - progressBarWidth));
    newY = Math.max(-30, Math.min(newY, 30)); // Keep within header vertical bounds
    
    const newPosition = { x: newX, y: newY };
    setProgressBarPosition(newPosition);
    localStorage.setItem('eigenverse-progress-bar-position', JSON.stringify(newPosition));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const topicContent = {
    'foundations': {
      title: 'Foundations',
      description: 'Build your understanding of the fundamental concepts in machine learning.',
      content: [
        'Linear Algebra Fundamentals',
        'Probability and Statistics',
        'Calculus for ML',
        'Information Theory',
        'Optimization Basics'
      ]
    },
    'neural-networks': {
      title: 'Neural Networks',
      description: 'Dive deep into the architecture and training of neural networks.',
      content: [
        'Perceptrons and Multi-layer Networks',
        'Backpropagation Algorithm',
        'Activation Functions',
        'Regularization Techniques',
        'Deep Learning Fundamentals'
      ]
    },
    'probabilistic-models': {
      title: 'Probabilistic Models',
      description: 'Learn about uncertainty modeling and probabilistic approaches.',
      content: [
        'Bayesian Networks',
        'Hidden Markov Models',
        'Gaussian Mixture Models',
        'Variational Inference',
        'MCMC Methods'
      ]
    },
    'reinforcement-learning': {
      title: 'Reinforcement Learning',
      description: 'Master the art of learning through interaction and rewards.',
      content: [
        'Markov Decision Processes',
        'Q-Learning and SARSA',
        'Policy Gradient Methods',
        'Actor-Critic Methods',
        'Deep Reinforcement Learning'
      ]
    },
    'memory-models': {
      title: 'Memory Models',
      description: 'Explore architectures that can remember and process sequences.',
      content: [
        'Recurrent Neural Networks',
        'LSTM and GRU',
        'Attention Mechanisms',
        'Transformer Architecture',
        'Memory Networks'
      ]
    },
    'multi-modal-foundation-models': {
      title: 'Multi Modal & Foundation Models',
      description: 'Learn about large-scale models that understand multiple data types.',
      content: [
        'Vision-Language Models',
        'Foundation Model Architecture',
        'Pre-training Strategies',
        'Fine-tuning Techniques',
        'Emergent Capabilities'
      ]
    },
    'contrastive-learning': {
      title: 'Contrastive Learning',
      description: 'Understand self-supervised learning through contrastive methods.',
      content: [
        'Contrastive Loss Functions',
        'SimCLR and MoCo',
        'Negative Sampling',
        'Self-Supervised Learning',
        'Representation Learning'
      ]
    },
    'diffusion-models': {
      title: 'Diffusion Models',
      description: 'Explore the latest in generative modeling with diffusion processes.',
      content: [
        'Denoising Diffusion Models',
        'Score-based Generative Models',
        'DDPM and DDIM',
        'Conditional Generation',
        'Latent Diffusion Models'
      ]
    },
    'advanced-topics': {
      title: 'Advanced Topics',
      description: 'Cutting-edge research and advanced concepts in machine learning.',
      content: [
        'Meta-Learning',
        'Neural Architecture Search',
        'Federated Learning',
        'Causal Inference',
        'Interpretable AI'
      ]
    }
  };

  const currentTopic = topicContent[topic];

  if (!currentTopic) {
    return (
      <div className="topic-page">
        <div className="topic-container">
          <h1>Topic Not Found</h1>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="topic-page">

      {topic === 'foundations' && sidebarOpen && (
        <FoundationsSidebar 
          onToggle={() => setSidebarOpen(false)}
          onGoBack={() => navigate(-1)}
          onContentSelect={handleContentSelect}
        />
      )}
      
      
      <div className="topic-content-wrapper">
        <div className="topic-header">
          <div 
            className="header-controls" 
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'relative' }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Draggable Progress Bar */}
            {topic === 'foundations' && (
              <div 
                style={{
                  position: 'absolute',
                  top: `${progressBarPosition.y}px`,
                  left: `${progressBarPosition.x}px`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  backgroundColor: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: '1px solid #f0f0f0',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  userSelect: 'none',
                  zIndex: 1000
                }}
                onMouseDown={handleMouseDown}
              >
                <span style={{
                  fontSize: '14px',
                  color: '#666',
                  fontFamily: 'Inter',
                  fontWeight: '500'
                }}>
                  Progress: {Math.round(calculateProgress())}%
                </span>
                <div style={{
                  width: '120px',
                  height: '6px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    backgroundColor: '#1e3a5f',
                    width: `${calculateProgress()}%`,
                    borderRadius: '20px',
                    transition: isDragging ? 'none' : 'width 0.4s ease-in-out'
                  }} />
                </div>
                <span style={{
                  fontSize: '12px',
                  color: '#888',
                  fontFamily: 'Inter'
                }}>
                  {completedTopics.length}/{getAllTopicIds().length}
                </span>
              </div>
            )}
            <div>
              {topic !== 'foundations' && (
                <button onClick={() => navigate(-1)} className="back-button">
                  ← Go Back
                </button>
              )}
              {topic === 'foundations' && !sidebarOpen && (
                <button 
                  onClick={() => setSidebarOpen(true)}
                  style={{
                    width: '24px',
                    height: '24px',
                    background: 'transparent',
                    border: '1px solid #BCD4F3',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#8598AE'
                  }}
                >
                  ▶
                </button>
              )}
            </div>
            <div className="user-controls" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginRight: '10px' }}>
              <span>Welcome, {user?.email}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="topic-container">
          {selectedContent && contentData[selectedContent] && (
            <div style={{ padding: '20px 40px', maxWidth: '900px', margin: '0 auto' }}>
              {/* Section Title */}
              <div style={{
                color: 'black',
                fontSize: '32px',
                fontFamily: 'Orbit',
                fontWeight: 400,
                wordWrap: 'break-word',
                marginBottom: '0px'
              }}>
                {contentData[selectedContent].title}
              </div>
              
              {/* Subtitle */}
              <div style={{
                color: 'black',
                fontSize: '18px',
                fontFamily: 'Inter',
                fontStyle: 'italic',
                fontWeight: 100,
                wordWrap: 'break-word',
                lineHeight: '1.5',
                marginBottom: '30px'
              }}>
                {contentData[selectedContent].subtitle}
              </div>
              
              {/* Description */}
              <div style={{
                color: 'black',
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: 100,
                wordWrap: 'break-word',
                lineHeight: '1.5',
                marginBottom: '40px'
              }}>
                {contentData[selectedContent].description}
              </div>
              
              {/* Sections */}
              {contentData[selectedContent].sections && contentData[selectedContent].sections.map((section) => (
                <div key={section.id} id={section.id} style={{ marginBottom: '60px' }}>
                  {/* Section Title */}
                  <div style={{
                    color: 'black',
                    fontSize: '28px',
                    fontFamily: 'Orbit',
                    fontWeight: 400,
                    wordWrap: 'break-word',
                    marginBottom: '20px'
                  }}>
                    {section.title}
                  </div>
                  
                  {/* Definition */}
                  <div style={{
                    color: 'black',
                    fontSize: '18px',
                    fontFamily: 'Inter',
                    fontWeight: 100,
                    wordWrap: 'break-word',
                    lineHeight: '1.5',
                    marginBottom: '20px'
                  }}>
                    {section.definition && (
                      <div dangerouslySetInnerHTML={{ __html: section.definition }} />
                    )}
                    
                    {section.mathDefinition && (
                      <div style={{ margin: '20px 0', textAlign: 'center' }}>
                        <MathComponent block>{section.mathDefinition}</MathComponent>
                      </div>
                    )}
                    
                    {section.mathNote && (
                      <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
                        <MathComponent>{section.mathNote}</MathComponent>
                      </div>
                    )}
                  </div>
                  
                  {/* Properties */}
                  {section.properties && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div style={{
                          color: 'black',
                          fontSize: '18px',
                          fontFamily: 'Inter',
                          fontWeight: 100,
                          wordWrap: 'break-word',
                          lineHeight: '1.5'
                        }}>
                          <span style={{ color: '#8598AE' }}>→</span> {section.properties[0]}
                        </div>
                        
                        <div style={{
                          color: 'black',
                          fontSize: '18px',
                          fontFamily: 'Inter',
                          fontWeight: 100,
                          wordWrap: 'break-word',
                          lineHeight: '1.5'
                        }}>
                          <span style={{ color: '#8598AE' }}>→</span> {section.properties[1]}
                        </div>
                      </div>
                      
                      {/* Bracket and text */}
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* Square bracket shape ] */}
                        <div style={{ position: 'relative', width: '20px', height: '80px', marginRight: '15px' }}>
                          <div style={{
                            width: '1px',
                            height: '80px',
                            backgroundColor: '#8598AE',
                            position: 'absolute',
                            right: '0px'
                          }} />
                          <div style={{
                            width: '10px',
                            height: '1px',
                            backgroundColor: '#8598AE',
                            position: 'absolute',
                            right: '0px',
                            top: '0px'
                          }} />
                          <div style={{
                            width: '10px',
                            height: '1px',
                            backgroundColor: '#8598AE',
                            position: 'absolute',
                            right: '0px',
                            bottom: '0px'
                          }} />
                        </div>
                        
                        {/* Text */}
                        <div style={{
                          color: 'black',
                          fontSize: '18px',
                          fontFamily: 'Inter',
                          fontWeight: 100,
                          whiteSpace: 'nowrap'
                        }}>
                          and produces another object of the <em style={{ fontWeight: 400 }}>same kind</em>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Explanation */}
                  {section.explanation && (
                    <div style={{
                      color: 'black',
                      fontSize: '18px',
                      fontFamily: 'Inter',
                      fontWeight: 100,
                      wordWrap: 'break-word',
                      lineHeight: '1.5',
                      marginBottom: '20px',
                      whiteSpace: 'pre-line'
                    }} 
                    dangerouslySetInnerHTML={{ __html: section.explanation.replace(/\n/g, '<br>') }}
                    />
                  )}
                  
                  {/* Example */}
                  {section.example && (
                    <div style={{
                      color: 'black',
                      fontSize: '18px',
                      fontFamily: 'Inter',
                      fontWeight: 100,
                      wordWrap: 'break-word',
                      lineHeight: '1.5',
                      textAlign: 'center',
                      marginBottom: '20px'
                    }}>
                      {section.example}
                    </div>
                  )}
                  
                  {/* Useful Resources for Vector Databases */}
                  {section.id === '1.1.2' && (
                    <div style={{ marginTop: '40px' }}>
                      <div style={{
                        color: 'black',
                        fontSize: '20px',
                        fontFamily: 'Orbit',
                        fontWeight: 400,
                        marginBottom: '20px'
                      }}>
                        Useful Resources
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                        marginTop: '20px'
                      }}>
                        <CustomVideoPlayer 
                          videoId="dvDmXTKFtgQ"
                          title="Vectors in ML"
                          width={400}
                          height={225}
                        />
                        <CustomVideoPlayer 
                          videoId="gl1r1XV0SLw"
                          title="Vector Database"
                          width={400}
                          height={225}
                        />
                        <CustomVideoPlayer 
                          videoId="wgfSDrqYMJ4"
                          title="Word Embeddings"
                          width={400}
                          height={225}
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Matrix Learning Path Buttons */}
                  {section.id === '1.1.3' && (
                    <div>
                      <div style={{
                        color: 'black',
                        fontSize: '18px',
                        fontFamily: 'Inter',
                        fontWeight: 100,
                        textAlign: 'center',
                        marginTop: '40px',
                        marginBottom: '20px'
                      }}>
                        now lets get into more detail...
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px'
                      }}>
                      <button 
                        onClick={() => toggleMathSection('mathy')}
                        style={{
                        backgroundColor: mathSectionOpen === 'mathy' ? '#0f2a3f' : '#1e3a5f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '15px 30px',
                        fontSize: '16px',
                        fontFamily: 'Orbit',
                        fontWeight: '400',
                        cursor: 'pointer'
                      }}>
                        VERY mathy stuff
                      </button>
                      <button 
                        onClick={() => toggleMathSection('nomath')}
                        style={{
                        backgroundColor: mathSectionOpen === 'nomath' ? '#0f2a3f' : '#1e3a5f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '15px 30px',
                        fontSize: '16px',
                        fontFamily: 'Orbit',
                        fontWeight: '400',
                        cursor: 'pointer'
                      }}>
                        pls no math
                      </button>
                      </div>

                      {/* Expandable Math Sections */}
                      {mathSectionOpen === 'mathy' && (
                        <div style={{
                          marginTop: '30px',
                          padding: '20px',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '8px',
                          border: '1px solid #e9ecef'
                        }}>
                          <h3 style={{
                            color: '#1e3a5f',
                            fontSize: '20px',
                            fontFamily: 'Orbit',
                            marginBottom: '15px'
                          }}>
                            VERY Mathy Content
                          </h3>
                          <div style={{
                            color: 'black',
                            fontSize: '16px',
                            fontFamily: 'Inter',
                            lineHeight: '1.6'
                          }}>
                            <p>This is where you'll add the very mathematical content with complex equations, proofs, and detailed mathematical explanations.</p>
                            <MathComponent block>
                              {'\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}'}
                            </MathComponent>
                            <p>More mathematical content goes here...</p>
                          </div>
                        </div>
                      )}

                      {mathSectionOpen === 'nomath' && (
                        <div style={{
                          marginTop: '30px',
                          padding: '20px',
                          backgroundColor: '#f0f8f0',
                          borderRadius: '8px',
                          border: '1px solid #d4edda'
                        }}>
                          <h3 style={{
                            color: '#1e3a5f',
                            fontSize: '20px',
                            fontFamily: 'Orbit',
                            marginBottom: '15px'
                          }}>
                            No Math Please!
                          </h3>
                          <div style={{
                            color: 'black',
                            fontSize: '16px',
                            fontFamily: 'Inter',
                            lineHeight: '1.6'
                          }}>
                            <p>This is where you'll add intuitive explanations without heavy mathematics, using analogies, visual descriptions, and simple language.</p>
                            <p>Think of matrices like spreadsheets - they're just organized tables of numbers that help us work with lots of data at once!</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* 3D Vector Visualization - Space reserved for future graph */}
                  {section.id === '1.1.1' && (
                    <div>
                      <div style={{ 
                        marginTop: '30px', 
                        height: '400px', 
                        border: '2px dashed #e0e0e0', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#8598AE',
                        fontSize: '16px',
                        fontFamily: 'Inter'
                      }}>
                        3D Vector Visualization Space
                      </div>
                      
                      {/* Additional explanation after visualization */}
                      <div style={{
                        marginTop: '40px',
                        color: 'black',
                        fontSize: '18px',
                        fontFamily: 'Inter',
                        fontWeight: 100,
                        wordWrap: 'break-word',
                        lineHeight: '1.5'
                      }}>
                        In later sections, we will use vectors extensively. Here are some key applications:
                        
                        <br /><br />
                        
                        Similarity search works by comparing vector distances. If another phrase like "Hello Mathlete" gets embedded, its vector will be positioned close to our original vector v in the mathematical space. This proximity indicates semantic similarity, which is exactly how modern search engines and recommendation systems find content with related meanings.
                        
                        <br /><br />
                        
                        Neural networks use these vectors as input data. When you send a message to ChatGPT, your text is first converted into vectors, which then serve as the starting point for the neural network to understand your query and generate an appropriate response.
                        
                        <br /><br />
                        
                        Building on this, clustering and classification allow us to scale these insights to thousands or millions of phrases. By embedding all the phrases into vectors, machine learning algorithms can automatically group them based on how close they are in space. Phrases with similar meanings end up near each other.
                      </div>
                    </div>
                  )}
                  
                  {/* Mark as Complete Checkmark - Bottom of section */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '30px',
                    paddingTop: '20px',
                    borderTop: '1px solid #e0e0e0'
                  }}>
                    <button
                      onClick={() => completedTopics.includes(section.id) 
                        ? markTopicIncomplete(section.id) 
                        : markTopicComplete(section.id)
                      }
                      style={{
                        backgroundColor: 'transparent',
                        border: completedTopics.includes(section.id) ? '2px solid #28a745' : '2px solid #ccc',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        color: completedTopics.includes(section.id) ? '#28a745' : '#ccc',
                        transition: 'all 0.2s ease',
                        hover: {
                          borderColor: '#28a745',
                          color: '#28a745'
                        }
                      }}
                      title={completedTopics.includes(section.id) ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                      {completedTopics.includes(section.id) ? '✓' : ''}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicPage;