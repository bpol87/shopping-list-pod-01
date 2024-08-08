import axios from "axios";
import '../../../src/index.css';
import Swal from 'sweetalert2';

function ShoppingItem ({item, getSupplies}) {

    const deleteItem = () => {
        Swal.fire({
            title: "You're about to obliterate this item from your list!!",
            text: "You won't be able to undo this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#04bb99",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, obliterate it from my shopping list!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: 'DELETE',
                    url: `/api/shopping-list/${item.id}`
                })
                .then(response => {
                    getSupplies();
                })
              Swal.fire({
                title: "Obliterated!!",
                text: "Your item has been obliterated from your shopping list!",
                icon: "success"
              });
            }
          }).catch(err => {
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