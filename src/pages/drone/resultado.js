import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCog } from '@fortawesome/free-solid-svg-icons';
import qrcode from '../../assets/Screenshot_2.png';
import { Button, Modal } from 'react-bootstrap';


function Resultado() {
    return (
        <div style={{margin: '0' ,backgroundColor: '#E5E5E5'}}>
            <div className="row" style={{ padding: '15px'}}>
                <div className="col">
                    <img src={qrcode} className="qr-code"></img>
                </div>
                <div className="col">
                    <FontAwesomeIcon className="flecha-direita" icon={faArrowRight} size='4x' />
                </div>
                <div className="col-6">
                    <h3 className="result-qrcode">
                   <p>Produto:</p> 
                   <p>Quantidade:</p> 
                   <p>Peso:</p> 
                   <p>Local:</p> 
                    </h3>
                </div>
                <div className="col-1" style={{ margin: '0', marginTop: '15%' }}>
                    <button type="button" class="btn btn-link">
                        <FontAwesomeIcon className="ajust" icon={faCog} size='2x' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Resultado;