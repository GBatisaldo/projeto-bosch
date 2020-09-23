import React from 'react';
import DroneTela from './droneTela';
import Resultado from './resultado';

function Drone() {
    return( 
        <div className="col-7 title">
            <h1>Drone</h1>
            <DroneTela />
            <h1>Resultado</h1>
            <Resultado />
        </div>
    );
}

export default Drone;