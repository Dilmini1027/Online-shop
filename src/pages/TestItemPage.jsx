import React from 'react';
import { useParams } from 'react-router-dom';

const TestItemPage = () => {
  const { category, itemId } = useParams();
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Test Item Details Page</h1>
      <p><strong>Category:</strong> {category || 'Not found'}</p>
      <p><strong>Item ID:</strong> {itemId || 'Not found'}</p>
      <p><strong>Current URL:</strong> {window.location.pathname}</p>
      
      <h2>Navigation Test</h2>
      <ul>
        <li><a href="/cakes">Go to Cakes</a></li>
        <li><a href="/cakes/red-violet-1">Direct to Red Violet Cake</a></li>
        <li><a href="/">Back to Home</a></li>
      </ul>
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <p>If you can see this page, the routing is working!</p>
        <p>URL parameters are being captured correctly.</p>
      </div>
    </div>
  );
};

export default TestItemPage;