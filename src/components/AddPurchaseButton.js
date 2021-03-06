import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

import AddPurchaseForm from './AddPurchaseForm';


import { PurchaseContext } from '../contexts/PurchaseContext';



const AddPurchaseButton = () => {

    const {purchases} = useContext(PurchaseContext);

    // const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)

    // const handleShowAlert = () => {
    //     setShowAlert(true);
    //     setTimeout(()=> {
    //         setShowAlert(false);
    //     }, 2000)
    // }

    // useEffect hook to close the form when it is submited; fires when the purchases list changes
    useEffect(() => {
        handleClose();

        // return () => {
        //     handleShowAlert();
        // }
    }, [purchases]);



    return (
        <>
        <Button onClick={handleShow} variant="danger">Add</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                Add Purchase
            </Modal.Header>
            <Modal.Body>
                <AddPurchaseForm />
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close Button</Button>
            </Modal.Footer> */}
        </Modal>
        {/* <Alert show={showAlert} variant="success">
            Purchase Added Succefully!
        </Alert> */}
        </>
    );
}



export default AddPurchaseButton;