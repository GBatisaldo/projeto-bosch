import React, { useEffect } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { useGlobalState } from '../../App'
import { api } from '../../services/api'

function TableProd() {
    const [state, dispatch] = useGlobalState();

    useEffect(() => {
        api.get('produtos').then(response => {
            dispatch(state.produtos.push(...response.data))
        })
    }, [])

    console.log(state.produtos)

    return (
        <div>
            <ul class="list-group">
                {state.produtos.map((produto) => {
                    return (
                        <li class="list-group-item cinza"><Icon className="seta" icon={faArrowRight} size='1px' />{produto.nomeProduto}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TableProd;