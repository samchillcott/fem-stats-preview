import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="image-wrapper" />
        <div className="text-wrapper">
          <div className="top-text">
            <h1>
              Get
              {' '}
              <span>insights</span>
              {' '}
              that help your business grow.
            </h1>

            <p>
              Discover the benefits of data analytics and make better decisions regarding revenue,
              customer experience, and overall efficiency.
            </p>
          </div>
          <div className="bottom-text">
            <div className="col">
              <h2>10k+</h2>
              <small>COMPANIES</small>
            </div>
            <div className="col">
              <h2>314</h2>
              <small>TEMPLATES</small>
            </div>
            <div className="col">
              <h2>12M+</h2>
              <small>QUERIES</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
