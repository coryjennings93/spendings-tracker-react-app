import FilterByCategoryDropdown from "./FilterByCategoryDropdown";
import AddPurchaseButton from "./AddPurchaseButton";


const ButtonsContainer = () => {

    return (
        <div className="btn-container container-fluid d-flex justify-content-between">   
            <FilterByCategoryDropdown />
            <AddPurchaseButton />
        </div>
    );
}

export default ButtonsContainer;