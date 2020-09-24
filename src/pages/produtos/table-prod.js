import React from 'react';
import { faArrowRight, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TableProd() {
    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item cinza"><FontAwesomeIcon className="seta" icon={faArrowRight} size='1px' />Pregos</li>
                <li class="list-group-item"><FontAwesomeIcon className="seta" icon={faArrowRight} size='1px' />Cartucho de Impressora</li>
                <li class="list-group-item cinza"><FontAwesomeIcon className="seta" icon={faArrowRight} size='1px' />Martelos</li>
                <li class="list-group-item"><FontAwesomeIcon className="seta" icon={faArrowRight} size='1px' />Rolamento</li>
                <li class="list-group-item cinza"><FontAwesomeIcon className="seta" icon={faArrowRight} size='1px' />placa de metal</li>
            </ul>
        </div>
    );
}

export default TableProd;