import { useContext, useEffect } from 'react';
import { PurchaseContext } from '../contexts/PurchaseContext';
import Purchase from './Purchase';


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const PurchaseList = () => {
 
    // this creates a useContext hook
    const {purchases} = useContext(PurchaseContext);
    console.log(purchases);

    const {total} = useContext(PurchaseContext);
    const {filteredPurchases} = useContext(PurchaseContext);

    console.log("Total", total);
    const {selectedCategory} = useContext(PurchaseContext);

    console.log("Selected Category", selectedCategory);
    // useEffect(() => {
    //     calcTotalAll
    //     // console.log(filteredPurchases)
    // }, []);

    let purchaseRows;
    if(selectedCategory === "All") {
        purchaseRows = (
            purchases.map(purchase => (
                <tr key={purchase.id}>
                    <Purchase purchase={ purchase } />
                </tr>
            ))
        );
    } else {
        purchaseRows = (
            filteredPurchases.map(purchase => (
                <tr key={purchase.id}>
                    <Purchase purchase={ purchase } />
                </tr>
            ))
        );
    };

    // useEffect(() => {
    //     const calcTotal = () => {
    //         //    console.log(filteredPurchases[0].cost);
    //            let costsArray =  filteredPurchases.map(purchase => parseFloat(purchase.cost))
    //            const reducer = (accumulator, item) => {
    //                return accumulator + item;
    //            };
    //            const total = costsArray.reduce(reducer, 0).toFixed(2);
    //            return total;
        
        
    //         };
    //   }, [])
    //   console.log(calcTotal());


    return (

        <>
        <table className="table table-striped table-hover">
            <thead className="tableHead">
                <tr>
                    {/* <th>ID</th> */}
                    <th>Date</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {purchaseRows}
                <tr className="totalBar">
                    <td><b>Category:</b></td>
                    <td>{selectedCategory}</td>
                    <td><b>Total:</b></td>
                    <td>&#36;{total}</td>
                </tr>    
            </tbody>
        </table>
        <div></div> 
        </>

    
    );
}

export default PurchaseList;