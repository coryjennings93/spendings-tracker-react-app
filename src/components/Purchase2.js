const Purchase2 = ({purchase}) => {
    return (
        <>
            <td>{purchase.id}</td>
            <td>{purchase.date}</td>
            <td>{purchase.category}</td>
            <td>{purchase.location}</td>
            <td>{purchase.cost}</td>
            {/* <td>

            </td> */}
        </>
    );
}

export default Purchase2;