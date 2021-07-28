import React from 'react';

const PurchasesHeading = (props) => {
    return(
        <thead className="purchasesHeader">
            <th>ID</th>
            <th>Date</th>
            <th>Category</th>
            <th>Location</th>
            <th>Cost</th>
        </thead>
    );
}

export default PurchasesHeading;