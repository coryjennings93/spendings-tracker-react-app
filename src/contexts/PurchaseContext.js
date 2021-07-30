import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const PurchaseContext = createContext();

const PurchaseContextProvider  = (props) => {

    // Declare a new state variable, which we call purchases
    const [purchases, setPurchases] = useState([
        {
            id: uuidv4(),
            date: "7/15/2021",
            category: 'Transportation',
            location: 'Speedway @ Middletown',
            cost: 23.64
        },
        {
            id: uuidv4(),
            date: "7/15/2021",
            category: 'Groceries',
            location: 'Walmart @ Westport rd',
            cost: 112.78
        },
        {
            id: uuidv4(),
            date: "7/17/2021",
            category: 'Restaurant',
            location: 'Chipotle',
            cost: 8.06
        },
        {
            id: uuidv4(),
            date: "7/17/2021",
            category: 'Wardrobe',
            location: 'Macys',
            cost: 31.44
        },
        {
            id: uuidv4(),
            date: "7/17/2021",
            category: 'Pet',
            location: 'PetCo @ Middletown',
            cost: 26.11
        },{
            id: uuidv4(),
            date: "7/21/2021",
            category: 'Entertainment',
            location: 'Bought Fishing Poles',
            cost: 64.36
        },
        {
            id: uuidv4(),
            date: "7/21/2021",
            category: 'Groceries',
            location: 'Costco @ HW42',
            cost: 112.78
        },
        {
            id: uuidv4(),
            date: "7/21/2021",
            category: 'Restaurant',
            location: 'Panera',
            cost: 10.09
        },
        {
            id: uuidv4(),
            date: "7/23/2021",
            category: 'Wardrobe',
            location: 'Amazon',
            cost: 42.11
        },
        {
            id: uuidv4(),
            date: "7/24/2021",
            category: 'Pet',
            location: 'Catnip Toy',
            cost: 3.06
        },{
            id: uuidv4(),
            date: "7/24/2021",
            category: 'Groceries',
            location: 'Fresh Time',
            cost: 65.78
        },
        {
            id: uuidv4(),
            date: "7/25/2021",
            category: 'Groceries',
            location: 'Costco',
            cost: 200.36
        },
        {
            id: uuidv4(),
            date: "7/25/2021",
            category: 'Groceries',
            location: 'Tea from Online',
            cost: 96.22
        },
        {
            id: uuidv4(),
            date: "7/25/2021",
            category: 'Transportation',
            location: 'Gas @ Costco',
            cost: 21.65
        },
        {
            id: uuidv4(),
            date: "7/26/2021",
            category: 'Entertainment',
            location: 'Spotify Prescription',
            cost: 12.99
        },{
            id: uuidv4(),
            date: "7/26/2021",
            category: 'Wardrobe',
            location: 'Shoe Carnival',
            cost: 62.78
        },
        {
            id: uuidv4(),
            date: "7/26/2021",
            category: 'Wardrobe',
            location: 'TJMaxx',
            cost: 45.74
        },
        {
            id: uuidv4(),
            date: "7/26/2021",
            category: 'Restaurant',
            location: 'Chipotle',
            cost: 8.06
        },
        {
            id: uuidv4(),
            date: "7/28/2021",
            category: 'Insurance',
            location: 'Car',
            cost: 107.36
        },
        {
            id: uuidv4(),
            date: "7/28/2021",
            category: 'Groceries',
            location: 'Kroger @ Clifton',
            cost: 32.28
        }
    ]);

    const [filteredPurchases, setFilteredPurchases] = useState([
        {
            id: 0,
            date: "mm/dd/yyyy",
            category: '',
            location: '',
            cost: 0
        }
    ]);

    const [total, setTotal] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categoriesList = ["Transportation", "Restaurant", "Wardrobe", "Groceries", "Pet", 
                            "Entertainment", "Insurance", "Housing", "Utilities", "Healthcare", 
                            "Savings/Investment", "Miscellaneous"];


    // Set Up local storage
    useEffect(()=> {
        setPurchases(JSON.parse(localStorage.getItem('purchases')))
    },[])

    useEffect(() => {
        localStorage.setItem('purchases', JSON.stringify(purchases));
    })





    // const sortedpurchases = purchases.sort((a,b)=>(a.name < b.name ? -1 : 1));
    // let total = 0;


    const calcTotal = () => {
    //    console.log(filteredPurchases[0].cost);
       let costsArray =  filteredPurchases.map(purchase => parseFloat(purchase.cost))
       const reducer = (accumulator, item) => {
           return accumulator + item;
       };
       const total = costsArray.reduce(reducer, 0).toFixed(2);
       return total;


    };

    const calcTotalAll = () => {
        let costsArray =  purchases.map(purchase => parseFloat(purchase.cost))
        const reducer = (accumulator, item) => {
            return accumulator + item;
        };
        const total = costsArray.reduce(reducer, 0).toFixed(2);
        return total;   
    }


    useEffect(() => {
        setTotal(calcTotal())
    }, [filteredPurchases])

    // Calc total when page first loads
    useEffect(() => {
        setTotal(calcTotalAll());
        // console.log(filteredPurchases)
    }, [purchases]);

    useEffect(() => {
        calcTotal()
        // console.log(filteredPurchases)
    }, [filteredPurchases]);



    const addPurchase = (date, category, location, cost) => {
        setPurchases([...purchases, {id:uuidv4(), date, category, location, cost}])
        // setTotal(calcTotalAll());
        // console.log(purchases);
    };

    // let selectedCategory = "All";
    // const filterPurchases = category => console.log(category);
    const filterPurchases = (category) => {
        setFilteredPurchases(purchases.filter(purchase => purchase.category === category));
        setSelectedCategory(category);

    };

    const displayAll = () => {
        setSelectedCategory("All");
        setTotal(calcTotalAll());
    };

    // const displaySelectedTable = () => {

    // }



    // const filterPurchase = (id) => {
    //     setPurchases(purchases.filter(purchase => purchase.id !== id))
    // }

    // const updatePurchase = (id, updatedPurchase) => {
    //     setPurchases(purchases.map((purchase) => purchase.id === id ? updatedPurchase : purchase))
    // }

    return (
        <PurchaseContext.Provider value={{purchases, addPurchase, categoriesList, filterPurchases, displayAll, calcTotal, 
                                        total, selectedCategory, calcTotalAll, filteredPurchases, setSelectedCategory}}>
            {props.children}
        </PurchaseContext.Provider>
    )
}

export default PurchaseContextProvider;