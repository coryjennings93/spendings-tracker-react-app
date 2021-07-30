import { useContext, useState } from 'react';
import { PurchaseContext } from '../contexts/PurchaseContext';

const Pagination = () => {
    const {categoriesList} = useContext(PurchaseContext);



    return(
        <div>{categoriesList}</div>
    );
}

export default Pagination;