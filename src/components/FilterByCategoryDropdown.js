import React from 'react';
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { PurchaseContext } from '../contexts/PurchaseContext';

const FilterByCategoryDropdown = () => {
    
    const {categoriesList} = useContext(PurchaseContext);
    const {filterPurchases} = useContext(PurchaseContext);
    const {displayAll} = useContext(PurchaseContext);
    // const {calcTotal} = useContext(PurchaseContext);
    console.log("FP:", filterPurchases);

    


    return (
        <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => displayAll()}>All</Dropdown.Item>
                    {categoriesList.map((category, index) => (
                        <Dropdown.Item key={index} value={category} onClick={(e) => {
                            filterPurchases(e.target.innerHTML);
                            // calcTotal();    
                        }}>
                        {category}
                        
                        </Dropdown.Item>
                    ))}
                    {/* <Dropdown.Item href="#/action-1">Gas</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
    );
}
export default FilterByCategoryDropdown;