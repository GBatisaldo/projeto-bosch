import React, { useState } from 'react';
import { Modal, ModalBody, ModalTitle, Button } from 'react-bootstrap';

function AcaoModal(props) {

    const [stats, setStats] = useState({
        produto: "",
        quantidade: "",
        peso: "",
        local: ""
    });

    function statsClick() {
        const newStats = {
            produto: "produto",
            quantidade: "quantidade",
            peso: "peso",
            local: "local"
        }

        setStats(newStats);        
        props.setStats(newStats);
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Title
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={statsClick}>setStats</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AcaoModal;