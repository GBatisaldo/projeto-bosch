import React, { useState } from 'react';
import { Modal, ModalBody, ModalTitle, Button, Form } from 'react-bootstrap';

function AcaoModal(props) {
     
    
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
    }
    console.log(produto);
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