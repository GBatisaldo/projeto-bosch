import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { api } from '../../services/api'

import { useGlobalState } from '../../App'

function AcaoModal(props) {
    const [state, dispatch] = useGlobalState();
     
    const [produto, setProduto] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [peso, setPeso] = useState("");
    const [local, setLocal] = useState("");

    const [stats, setStats] = useState({
        produto: "",
        quantidade: "",
        peso: "",
        local: ""
    });

    function statsClick() {
        const newStats = {
            produto,
            quantidade,
            peso,
            local
        }

        setStats(newStats);        
        props.setStats(newStats);
        enviarApi(newStats);
    }

    function enviarApi(newStats) {
        const produto = {
            nomeProduto: newStats.produto,
            quantidade: newStats.quantidade,
            peso: newStats.peso,
            local: newStats.local,
            imageUrl: 'imageUrlTesteSeiLaFodase'
        }

        api.post('produtos', produto).then(response => {
            dispatch(state.produtos.push(response.data[0]))
            console.log(response.data)
        })
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Editar
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Control onChange={(event) => setProduto(event.target.value)} type="text" placeholder="Produto" /> <br />
                    <Form.Control onChange={(event) => setQuantidade(event.target.value)} type="number" placeholder="Quantidade" /> <br />
                    <Form.Control onChange={(event) => setPeso(event.target.value)} type="text" placeholder="Peso" /> <br />
                    <Form.Control onChange={(event) => setLocal(event.target.value)} type="text" placeholder="Local" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={statsClick}>Editar</Button>
                <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AcaoModal;