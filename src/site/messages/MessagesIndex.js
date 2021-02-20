import React, {useState, useEffect} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const MessageBoard = (props) => {
    const {
        buttonLabel,
        className
    } = props;
    
    const [modal, setModal = useState(false);
    
    const toggle = () => setModal(!modal);

    return (
        <div>
        <Button color='danger' onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          llit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>All Messages</Button>{' '}
          <Button color="secondary" onClick={toggle}>Return</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
}

export default ModalExample;


// import React, {useState, useEffect} from 'react';

// const name
// const message
// user is already logged in
// Owner id session token
// component return in form
// create handle submit which talks to on click(post) trigers the handle submit = on event(prevent default) post create set message then resolve to json and changes state/successful fetch
// using functions/const instead of postman = Refactored with drop downs

// Fetch all s