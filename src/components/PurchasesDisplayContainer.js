import React from 'react';
import Purchase from './Purchase';
import PurchasesHeading from './PurchasesHeading';
import PurchasesTotalFooter from './PurchasesTotalFooter';
import AddPurchaseForm from './AddPurchaseForm';
import AddPurchaseButton from './AddPurchaseButton';
import FilterByCategoryDropdown from './FilterByCategoryDropdown';

import PurchaseList from './PurchaseList';
import Pagination from './Pagination';
import PurchaseContextProvider from '../contexts/PurchaseContext';
import ButtonsContainer from './ButtonsContainer';


import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import { Modal } from 'bootstrap';

const PurchasesDisplayContainer = (props) => {
    return (
        <div className="text-center">
            {/* <Table striped bordered hover>
                <thead className="purchasesHeader">
                    <PurchasesHeading />
                </thead>
                    <tbody className="tableBody">
                        {props.purchases.map(purchase =>
                            <Purchase 
                                id={purchase.id}
                                date={purchase.date}
                                category={purchase.category}
                                transaction={purchase.transaction}
                                cost={purchase.cost.toString()}  
                                key={purchase.id.toString()}       
                            />
                        )}
                        <PurchasesTotalFooter 
                         // category={props.category}
                        />
                    </tbody>
            </Table> */}

            <PurchaseContextProvider>
                <ButtonsContainer />
                <PurchaseList />
                <Pagination />
            </PurchaseContextProvider>

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Add Purchase
                </Modal.Header>
                <Modal.Body>
                    <AddPurchaseForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Button</Button>
                </Modal.Footer>
            </Modal> */}
        </div>
    );
}
export default PurchasesDisplayContainer;