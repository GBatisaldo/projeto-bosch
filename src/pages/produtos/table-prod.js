import React from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { useGlobalState } from '../../App'

function TableProd() {
    const [state, dispatch] = useGlobalState();

    return (
        <div>
            <ul class="list-group">
                {state.produtos.map((produto) => {
                    return (
                        <li class="list-group-item cinza"><Icon className="seta" icon={faArrowRight} size='1px' />{produto.produto}</li>
                    )
                })}

            </ul>
        </div>
    );
}

export default TableProd;