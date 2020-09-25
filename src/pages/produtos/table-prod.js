import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> master
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
<<<<<<< HEAD
=======

>>>>>>> master
            </ul>
        </div>
    );
}

export default TableProd;