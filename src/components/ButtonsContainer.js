import FilterByCategoryDropdown from "./FilterByCategoryDropdown";
import AddPurchaseButton from "./AddPurchaseButton";


const ButtonsContainer = () => {



    return (
        <div className="d-flex flex-row">
            <FilterByCategoryDropdown />
            <AddPurchaseButton /> 
        </div>
    );
}

export default ButtonsContainer;