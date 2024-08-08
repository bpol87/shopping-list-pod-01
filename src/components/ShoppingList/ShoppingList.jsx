import ShoppingItem from "../ShoppingItem/ShoppingItem.jsx";
import axios from "axios";

function ShoppingList({ suppliesList, getSupplies }) {
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
            console.log(err)
        })
    };

    const clearList = () => {
        axios({
            method: 'DELETE',
            url: '/api/shopping-list/clear'
        })
        .then ((res) => {
            getSupplies();
        })
        .catch((err) => {
            alert('Error Clearing List');
            console.log(err);
        })
    }


    return (
        <div className= "shoppingListLocation">
           <h2>Shopping List</h2>
        <div className="resetClearButtons">
            <button className="resetButton" onClick={resetList}>Reset</button>
            <button onClick={clearList}>Clear</button>
        </div>
        <div className="shoppingList">
            {suppliesList.map((item) => {
                return <ShoppingItem key={item.id} item={item} getSupplies={getSupplies} />
            })}
        </div>
        </div>
    )
};

export default ShoppingList;

// The `Reset` button should clear the purchased status from all items, allowing the list to be re-used. 
// The `Clear` button should remove all items from the list, deleting them from the database.