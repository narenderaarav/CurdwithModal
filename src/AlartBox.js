import React from 'react'
import { Button, Modal } from "react-bootstrap";

const AlartBox = (props) =>{

  return(
    <>
  
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do want to delete ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          No
        </Button>
        <Button variant="primary" onClick={props.handleConfirm}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AlartBox;