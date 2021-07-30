import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useContext, useState } from 'react';
import { PurchaseContext } from '../contexts/PurchaseContext';

// import SelectCategoryFormControl from './SelectCategoryFormControl';

const AddPurchaseForm = () => {

    // get current date
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    console.log(today);
// document.write(today);


    // this creates a useContext hook
    const {addPurchase} = useContext(PurchaseContext);
    const {categoriesList} = useContext(PurchaseContext);
    const {setSelectedCategory} = useContext(PurchaseContext);

    const [newPurchase, setNewPurchase] = useState({
        date: "red",
        category: "",
        location: "",
        cost: ""
    });

    const onInputChange = (e) => {
        setNewPurchase({...newPurchase,[e.target.name]: e.target.value});
        console.log({...newPurchase});
    }

    const {date, category, location, cost} = newPurchase; 

    const handleSubmit = (e) => {
        e.preventDefault();
        addPurchase(date, category, location, cost);
        setSelectedCategory("All");

    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control 
                    type="date" 
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
                    type="text" 
                    placeholder="0.00"
                    name="cost"
                    value={cost} 
                    onChange = { (e) => onInputChange(e) }
                />
            </Form.Group>
            <Button className="addNewPurchase-btn"variant="success" type="submit" block>Add New Purchase</Button>
        </Form>
    );
}

export default AddPurchaseForm;