import { useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem.jsx";
import Swal from 'sweetalert2';
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
        Swal.fire({
            title: "You're about to obliterate your entire list!!",
            text: "You won't be able to undo this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#04bb99",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, obliterate my shopping list!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: 'DELETE',
                    url: '/api/shopping-list/clear'
                })
                .then ((res) => {
                    getSupplies();
                })
              Swal.fire({
                title: "Deleted!",
                text: "Your list has been obliterated!",
                icon: "success"
              });
            }
          })
        .catch((err) => {
            alert('Error Clearing List');
            console.log(err);
        })
    }

    let [alertState, setAlertState] = useState(true);
    
    function showAlert () {
        setAlertState(true);
    }

    function closeAlert () {
        setAlertState(false);
    }

    return (
        <div className= "shoppingListLocation">
           <h2>Shopping List</h2>
        <div className="resetClearButtons">
            <button className="resetButton" onClick={resetList}>Reset</button>
            <button onClick={clearList}>Clear</button>
        </div>
        <div id="alert" className={alertState === true ? 'alert-show' : 'alert-hide' }>
            <p> ✓ Bananas has succesfully been updated!</p><button id="close-alert" onClick={closeAlert}>❌</button>
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