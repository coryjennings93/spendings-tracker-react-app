import React from 'react';
import Purchase from './Purchase';
import PurchasesHeading from './PurchasesHeading';
import PurchasesTotalFooter from './PurchasesTotalFooter';

import Table from 'react-bootstrap/Table';

const PurchasesDisplayContainer = (props) => {
    return (
        <div className="text-center">
            <Table striped bordered hover>
                <PurchasesHeading />
                    <tbody className="tableBody">
                        {props.purchases.map( (purchase) =>
                            <Purchase 
                                id={purchase.id}
                                date={purchase.date}
                                category={purchase.category}
                                transaction={purchase.transaction}
                                cost={purchase.cost.toString()}        
                            />
                        )}
                        <PurchasesTotalFooter 
                         // category={props.category}
                        />
                    </tbody>
            </Table>
            
        </div>
    );
}
export default PurchasesDisplayContainer;