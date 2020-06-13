//This Component will Render outside of root tag. Check index.html
//Check the button it will render inside tag having id Modal which is added in index.html


import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ReactPortalModal = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return ReactDOM.createPortal(
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>, 
      document.getElementById('Modal')
    );
}


export default ReactPortalModal;
