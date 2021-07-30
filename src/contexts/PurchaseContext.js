import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const PurchaseContext = createContext();

const PurchaseContextProvider  = (props) => {

    // Declare a new state variable, which we call purchases
    const [purchases, setPurchases] = useState([
        {
            id: uuidv4(),
            date: "7/22/2021",
            category: 'gas',
            location: 'Speedway @ Middletown',
            cost: 23.64
        },
        {
            id: uuidv4(),
            date: "7/22/2021",
            category: 'groceries',
            location: 'Walmart @ Westport rd',
            cost: 112.78
        },
        {
            id: uuidv4(),
            date: "7/23/2021",
            category: 'restaurant',
            location: 'Chipotle',
            cost: 8.06
        },
        {
            id: uuidv4(),
            date: "7/24/2021",
            category: 'apparel',
            location: 'Amazon',
            cost: 31.44
        },
        {
            id: uuidv4(),
            date: "7/24/2021",
            category: 'pet',
            location: 'Speedway @ Middletown',
            cost: 26.11
        }
    ]);

    // useEffect(()=> {
    //     setpurchases(JSON.parse(localStorage.getItem('purchases')))
    // },[])

    // useEffect(() => {
    //     localStorage.setItem('purchases', JSON.stringify(purchases));
    // })



    // const sortedpurchases = purchases.sort((a,b)=>(a.name < b.name ? -1 : 1));



    const addPurchase = (date, category, location, cost) => {
        setPurchases([...purchases, {id:uuidv4(), date, category, location, cost}])
        // console.log(purchases);
    };

    // const deletePurchase = (id) => {
    //     setPurchases(purchases.filter(purchase => purchase.id !== id))
    // }

    // const updatePurchase = (id, updatedPurchase) => {
    //     setPurchases(purchases.map((purchase) => purchase.id === id ? updatedPurchase : purchase))
    // }

    return (
        <PurchaseContext.Provider value={{purchases, addPurchase}}>
            {props.children}
        </PurchaseContext.Provider>
    )
}

export default PurchaseContextProvider;