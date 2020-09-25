import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCog } from '@fortawesome/free-solid-svg-icons';
import qrcode from '../../assets/Screenshot_2.png';
import AcaoModal from './modal'

import { useGlobalState } from '../../App'

function Resultado() {
    const [showModal, setShowModal] = useState(false);

    const [produto, setProduto] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [peso, setPeso] = useState("");
    const [local, setLocal] = useState("");

    const [state, dispatch] = useGlobalState();

    const setDroneStats = (stats) => {
        setProduto(stats.produto);
        setQuantidade(stats.quantidade);
        setPeso(stats.peso);
        setLocal(stats.local);

        setShowModal(false);

        let hasProduto = false;
        state.produtos.map((prod) => {
            if (prod.produto === stats.produto) {
                hasProduto = true;
            }
        })

        if(!hasProduto) {
            state.produtos.push(stats);
            dispatch({produtos: state.produtos})
        }
    }

    return (
        <>
            <div style={{ margin: '0', backgroundColor: '#E5E5E5' }}>
                <div className="row" style={{ padding: '15px' }}>
                    <div className="col">
                        <img src={qrcode} className="qr-code"></img>
                    </div>
                    <div className="col">
                        <FontAwesomeIcon className="flecha-direita" icon={faArrowRight} size='4x' />
                    </div>
                    <div className="col-6">
                        <h3 className="result-qrcode">
                            <p>Produto: {produto}</p>
                            <p>Quantidade: {quantidade}</p>
                            <p>Peso: {peso}</p>
                            <p>Local: {local}</p>
                        </h3>
                    </div>
                    <div className="col-1" style={{ margin: '0', marginTop: '15%' }}>
                        <button className="btn btn-link" onClick={() => setShowModal(true)}>
                            <FontAwesomeIcon className="ajust" icon={faCog} size='2x' />
                        </button>
                    </div>
                </div>
            </div>
            <AcaoModal
                show={showModal}
                onHide={() => setShowModal(false)}
                setStats={setDroneStats}
            />
        </>
    );
}

export default Resultado;