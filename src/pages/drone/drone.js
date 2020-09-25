import React from 'react';
import DroneTela from './droneTela';
import MapaDrone from './mapadron';
import Resultado from './resultado';

function Drone() {
    return( 
        <div className="col-7 title">
            <h1>Drone</h1>
            <DroneTela />
            <h1>Resultado</h1>
            <Resultado />
            <h1>Mapa</h1>
            <MapaDrone />
        </div>
    );
}

export default Drone;