import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FoundationsSidebar from './FoundationsSidebar';
import './TopicPage.css';

const TopicPage = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

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
    <div className={`topic-page ${topic === 'foundations' ? 'with-sidebar' : ''}`}>
      {topic === 'foundations' && <FoundationsSidebar />}
      
      <div className={`topic-content-wrapper ${topic === 'foundations' ? 'with-sidebar-offset' : ''}`}>
        <div className="topic-header">
          <div className="header-controls">
            <button onClick={() => navigate(-1)} className="back-button">
              ← Go Back
            </button>
            <div className="user-controls">
              <span>Welcome, {user?.email}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="topic-container">
          <div className="topic-hero">
            <h1>{currentTopic.title}</h1>
            <p>{currentTopic.description}</p>
          </div>

          <div className="topic-content">
            <h2>Learning Path</h2>
            <div className="content-list">
              {currentTopic.content.map((item, index) => (
                <div key={index} className="content-item">
                  <div className="item-number">{index + 1}</div>
                  <div className="item-title">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="topic-actions">
            <button className="start-learning-button">
              Start Learning
            </button>
            <button className="bookmark-button">
              Bookmark Topic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;