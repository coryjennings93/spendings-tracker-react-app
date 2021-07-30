import React, { useContext, useEffect } from 'react';
import { PurchaseContext } from '../contexts/PurchaseContext';


const PurchaseListTotalBar = () => {
    
    // this creates a useContext hook
    const {total} = useContext(PurchaseContext);

    // useEffect(() => {
    //     total = calcTotal()
    //     // console.log(filteredPurchases)
    // }, [filteredPurchases]);

    return (
        <div className="totalBar">hello</div>
    );
}

export default PurchaseListTotalBar;