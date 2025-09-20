// Simple test to verify that ItemDetailsPage routing works
import React from 'react';
import { useParams } from 'react-router-dom';

const SimpleItemTest = () => {
  const params = useParams();
  
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🔧 Simple Item Details Test</h1>
      <div style={{ background: '#f0f0f0', padding: '20px', marginBottom: '20px' }}>
        <h2>URL Parameters:</h2>
        <p><strong>Category:</strong> {params.category || 'NOT FOUND'}</p>
        <p><strong>Item ID:</strong> {params.itemId || 'NOT FOUND'}</p>
        <p><strong>All params:</strong> {JSON.stringify(params)}</p>
      </div>
      
      <div style={{ background: '#e6ffe6', padding: '20px', marginBottom: '20px' }}>
        <h2>Current URL:</h2>
        <p>{window.location.pathname}</p>
      </div>
      
      <div style={{ background: '#ffe6e6', padding: '20px' }}>
        <h2>Test Navigation:</h2>
        <p>Try these URLs manually:</p>
        <ul>
          <li><code>http://localhost:3000/cakes/red-violet-1</code></li>
          <li><code>http://localhost:3000/clothes/yellow-floral</code></li>
          <li><code>http://localhost:3000/fruits/apple-1</code></li>
        </ul>
      </div>
    </div>
  );
};

export default SimpleItemTest;