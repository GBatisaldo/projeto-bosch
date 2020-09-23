import React from 'react';
import Drone from './pages/drone/drone';
import Produtos from './pages/produtos/produtos';
import './pages/style/title.css';
import AcaoModal from './pages/produtos/modal';

function App() {
  return (
    <div style={{minHeight: '99vh', maxWidth: '99vw'}}>
      <div className="row">
        <Drone />
        <Produtos />
        <AcaoModal />
      </div>
    </div>
  );
}

export default App;
