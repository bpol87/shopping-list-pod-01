import { useState, useEffect } from 'react';
import axios from 'axios';


function ShoppingForm ({getSupplies}) {

    let [itemInput, setItemInput] = useState('');
    let [quantityInput, setQuantityInput] = useState('');
    let [unitInput, setUnitInput] = useState('');

    const addItem = (event) => {
        event.preventDefault();
        console.log('in addItem function. inputs are: ', itemInput, quantityInput, unitInput)

        axios({
            method: 'POST',
            url: '/api/shopping-list',
            data: {
                name: itemInput,
                quantity: quantityInput,
                unit: unitInput
            }
        })
        .then((response) => {
            setItemInput('');
            setQuantityInput('');
            setUnitInput('');

            getSupplies();
        })
        .catch ((error) => {
            console.log('Error in POST response from server: ', error);
        })
    }

    return (
        <>
            <h2>Add an Item:</h2>
            <form onSubmit={addItem}>
            <h5>Item:</h5>
                <input
                    value={itemInput}
                    onChange={(event) => {setItemInput(event.target.value)}}
                    type="text"
                    placeholder=""/>
                <h5>Quantity</h5>
                    <input
                        value={quantityInput}
                        onChange={(event) => {setQuantityInput(event.target.value)}}
                        type="text"
                        placeholder=""/>
                <h5>Unit</h5>
                    <input
                        value={unitInput}
                        onChange={(event) => {setUnitInput(event.target.value)}}
                        type="text"
                        placeholder=""/>
                <button>Save</button>
            </form>
        </>
    )
}

export default ShoppingForm;