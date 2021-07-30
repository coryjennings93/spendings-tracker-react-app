import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useContext, useState } from 'react';
import { PurchaseContext } from '../contexts/PurchaseContext';

// import SelectCategoryFormControl from './SelectCategoryFormControl';

const AddPurchaseForm = () => {


    // this creates a useContext hook
    const {addPurchase} = useContext(PurchaseContext);
    const {categoriesList} = useContext(PurchaseContext);
    console.log(categoriesList);

    const [newPurchase, setNewPurchase] = useState({
        date: "mm/dd/yyyy",
        category: "",
        location: "2",
        cost: "2"
    });

    const onInputChange = (e) => {
        setNewPurchase({...newPurchase,[e.target.name]: e.target.value});
        console.log({...newPurchase});
    }

    const {date, category, location, cost} = newPurchase; 

    const handleSubmit = (e) => {
        e.preventDefault();
        addPurchase(date, category, location, cost);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control 
                    type="date" 
                    placeholder="0.00" 
                    name="date"
                    value={date} 
                    onChange = { (e) => onInputChange(e) }
                    required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Catagory</Form.Label>
                <Form.Control 
                    as="select" 
                    name="category"
                    value={newPurchase.category}
                    onChange={e => onInputChange(e) }
                    required                     
                >
                    <option value="">Category...</option>
                    {categoriesList.map((category, index) => (
                        <option key={index} value={category}>
                        {category}
                        
                        </option>
                    ))}
                    {/* <option value="groceries">Groceries</option>
                    <option value="gas">Gas</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="wardrobe">Wardrobe</option> */}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Place of Transaction</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Place of Transaction" 
                    name="location"
                    value={location} 
                    onChange = { (e) => onInputChange(e) }    
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Price $</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="0.00"
                    name="cost"
                    value={cost} 
                    onChange = { (e) => onInputChange(e) }
                />
            </Form.Group>
            <Button variant="success" type="submit" block>Add New Purchase</Button>
        </Form>
    );
}

export default AddPurchaseForm;