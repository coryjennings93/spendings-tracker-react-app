import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AddPurchaseForm extends Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="0.00" />
                </Form.Group>
                <Form.Group>
                      <Form.Label>Catagory</Form.Label>
                      <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Groceries</option>
                        <option>Gas</option>
                        <option>Restaurant</option>
                        <option>Wardrobe</option>
                      </Form.Control>
                    </Form.Group>
                <Form.Group>
                    <Form.Label>Place of Transaction</Form.Label>
                    <Form.Control type="text" placeholder="Place of Transaction" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price $</Form.Label>
                    <Form.Control type="number" placeholder="0.00" />
                </Form.Group>
            </Form>

           
        );
    }
}

export default AddPurchaseForm;