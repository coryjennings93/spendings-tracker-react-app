import Dropdown from 'react-bootstrap/Dropdown';

const FilterByCategoryDropdown = () => {
    return (
        <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Gas</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
}
export default FilterByCategoryDropdown;