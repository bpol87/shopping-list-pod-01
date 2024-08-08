import axios from "axios";
import '../../../src/index.css';

function ShoppingItem ({item, getSupplies}) {

    const deleteItem = () => {
        axios({
            method: 'DELETE',
            url: `/api/shopping-list/delete/${item.id}`
        })
        .then(response => {
            getSupplies();
        })
        .catch(err => {
            alert('Error Deleting Item')
            console.log(err);
        })
    }

    const itemPurchased = () => {
        axios({
            method: 'PUT',
            url: `/api/shopping-list/buy/${item.id}`
        })
        .then(response => {
            getSupplies();
        })
        .catch(err => {
            alert('Error Updating Item')
            console.log (err);
        })
    }

    return (
        <div>
            <h4>{item.name}</h4>
            <p>{item.quantity} {item.unit}</p>
            <div>
                <p className={item.isPurchased === true ? 'reveal' : 'hide'}>Purchased</p>
                <button className={item.isPurchased === true ? 'purchased' : ''} onClick={itemPurchased}>Buy</button>
                <button className={item.isPurchased === true ? 'purchased' : ''} onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )

};

export default ShoppingItem;