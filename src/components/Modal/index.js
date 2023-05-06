import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function HomeModal(props) {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-width">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            Thank you for stopping by!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please take some time to check out my Projects, and Resume &
          Experience pages! I would love to connect with you! Please head over
          to my Contact Me page for details. Thanks again for stopping by and
          have a great day!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="modal-btn"
            onClick={handleClose}
          >
            <h2 className="modal-btn-text">Close</h2>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HomeModal;
