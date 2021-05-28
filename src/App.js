import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="image-wrapper" />
        <div className="text-wrapper">
          <div className="top-text">
            <h1>Get insights that help your business grow</h1>
            <p>
              Discover the benefits of data analytics and make better decisions regarding revenue,
              customer experience, and overall efficiency.
            </p>
          </div>
          <div className="bottom-text">
            <div className="col">
              <h3>10k+</h3>
              <small>companies</small>
            </div>
            <div className="col">
              <h3>314</h3>
              <small>templates</small>
            </div>
            <div className="col">
              <h3>12m+</h3>
              <small>queries</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
