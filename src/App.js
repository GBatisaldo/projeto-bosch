import React from 'react';
import Drone from './pages/drone/drone';
import Produtos from './pages/produtos/produtos';
import './pages/style/title.css';

function App() {
  return (
    <div style={{minHeight: '100vh'}}>
      <div className="row">
        <Drone />
        <Produtos />
      </div>
    </div>
  );
}

export default App;
