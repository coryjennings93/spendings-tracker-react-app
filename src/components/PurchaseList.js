import { useContext } from 'react';
import { PurchaseContext } from '../contexts/PurchaseContext';
import Purchase2 from './Purchase2';


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const PurchaseList = () => {
 
    // this creates a useContext hook
    const {purchases} = useContext(PurchaseContext);
    console.log(purchases);


    return (

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {
                    purchases.map(purchase => (
                        <tr key={purchase.id}>
                             <Purchase2 purchase={ purchase } />
                        </tr>
                    ))
                }
                    
            </tbody>
        </table> 
        
    
    );
}

export default PurchaseList;