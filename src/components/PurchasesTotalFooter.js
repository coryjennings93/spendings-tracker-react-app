import React from 'react';

const PurchasesTotalFooter = (props) => {
    return (
        // <div className="totalBar">
        //     <span>Category:</span>
        //     <span>Total:</span>
        //     <span>0.00</span>
        // </div>
    <tr className="purchaseDisplayFooter">
        <td colSpan="3">Category</td>
        <td >Total</td>
        <td>$0.00</td>
    </tr>
    );
}

export default PurchasesTotalFooter;