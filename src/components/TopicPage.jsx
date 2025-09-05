import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FoundationsSidebar from './FoundationsSidebar';
import Vector3DAxis from './Vector3DAxis';
import CustomVideoPlayer from './CustomVideoPlayer';
import './TopicPage.css';

const TopicPage = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState(null);

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
          definition: 'def: a matrix is a rectangular array of numbers arranged in rows and columns',
          explanation: 'Think of a matrix as a grid of numbers, where each number has a specific position defined by its row and column. If you think of vectors as single lists of numbers, a matrix can be seen as a collection of vectors stacked together:\n→ Columns as vectors: Each column can represent a vector.\n→ Rows as vectors: Each row can also represent a vector.\n\nIn machine learning, matrices let us perform operations on many data points simultaneously.\n\nFor example, if you have data about 1000 customers with 10 features each, you can store this as a 1000×10 matrix where:\n→ Each row represents one customer\n→ Each column represents one feature (age, income, etc.)\n→ You can process all customers at once using matrix operations\n\nMatrix multiplication is <strong>ESPECIALLY</strong> important in ML. When you multiply two matrices, you\'re essentially combining transformations. For instance, in neural networks:\nInput data (matrix) × Weights (matrix) = Output (matrix)\nThis happens at every layer, and GPUs accelerate these operations for speed.'
        }
      ]
    }
  };

  const handleContentSelect = (contentId, title) => {
    setSelectedContent(contentId);
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
          <div className="header-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'relative' }}>
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
                    {section.definition}
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
                      <button style={{
                        backgroundColor: '#1e3a5f',
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
                      <button style={{
                        backgroundColor: '#1e3a5f',
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