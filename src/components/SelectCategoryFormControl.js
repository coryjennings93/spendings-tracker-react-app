import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const SelectCategoryFormControl = () => {

    const [category, setCategory] = useState('');

    return (
    <Form.Control 
        as="select" 
        name="category"
        value={category}
        onChange={e => {
            // console.log("e.target.value", e.target.value);
            setCategory(e.target.value);
        }} 
    >
        <option>Category...</option>
        <option value="groceries">Groceries</option>
        <option value="gas">Gas</option>
        <option value="restaurant">Restaurant</option>
        <option value="wardrobe">Wardrobe</option>
    </Form.Control>
    )

    
};

export default SelectCategoryFormControl;