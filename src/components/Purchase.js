import React from 'react';

const Purchase = ({ id, date, category, transaction, cost , index }) => {

        return (
            <tr>
                <td>{ id }</td>
                <td>{date}</td>
                <td>{ category }</td>
                <td>{ transaction }</td>
                <td>{ cost }</td>
            </tr>
        );
}

export default Purchase;