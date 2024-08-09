import ShoppingItem from "../ShoppingItem/ShoppingItem.jsx";

function ShoppingList({ suppliesList, getSupplies, setItemToEdit }) {
    const resetList = () => {
        axios({
            method: 'PUT',
            url: 'api/shopping-list/reset'
        })
            .then((res) => {
                getSupplies();
            })
            .catch((err) => {
                alert('Error Resetting List');
                console.log(err);
            })
    };

    const clearList = () => {
        axios({
            method: 'DELETE',
            url: '/api/shopping-list/clear'
        })
            .then((res) => {
                getSupplies();
            })
            .catch((err) => {
                alert('Error Clearing List');
                console.log(err);
            })
    };

    return (
        <>
            <div>
                <button onClick={resetList}>Reset</button>
                <button onClick={clearList}>Clear</button>
            </div>
            <div>
                {suppliesList.map((item) => {
                    return <ShoppingItem key={item.id} item={item} getSupplies={getSupplies} setItemToEdit={setItemToEdit} />
                })}
            </div>
        </>
    );
};

export default ShoppingList;
