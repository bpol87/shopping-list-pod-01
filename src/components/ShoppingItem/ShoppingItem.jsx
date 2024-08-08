import axios from "axios";
import '../../../src/index.css';

function ShoppingItem ({item, getSupplies}) {

    const deleteItem = () => {
        axios({
            method: 'DELETE',
            url: `/api/shopping-list/${item.id}`
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
        <div className= {item.isPurchased === true ? 'teal-background' : 'displayed'}>
            <h4>{item.name}</h4>
            <p className= "quantityAndUnit">{item.quantity} {item.unit}</p>
            <div>
                <p className={item.isPurchased === true ? 'reveal' : 'hide'}>Purchased</p>
                <button className= {item.isPurchased === true ? 'purchased' : 'buyButton'} onClick={itemPurchased}>Buy</button>
                <button className={item.isPurchased === true ? 'purchased' : 'deleteButton'} onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )

};

export default ShoppingItem;