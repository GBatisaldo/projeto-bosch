import { render } from '@testing-library/react';
import React from 'react';
import { Modal, ModalBody, ModalTitle } from 'react-bootstrap';

function AcaoModal() {
    return(
        <Modal show={true}>
            <Modal.Header closeButton>
                <ModalTitle>Edição</ModalTitle>
            </Modal.Header>
            <ModalBody>
                um formulario pika aqui
        </ModalBody>

        </Modal>
    );
}

export default AcaoModal;