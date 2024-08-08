import { useState, useEffect } from 'react';
import axios from 'axios';


function ShoppingForm ({getSupplies}) {

    let [itemInput, setItemInput] = useState('');
    let [quantityInput, setQuantityInput] = useState('');
    let [unitInput, setUnitInput] = useState('');
console.log('itemInput is:', itemInput, 'quantityInput is:', quantityInput)
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
        <div className= "shoppingForm">
            <h2>Add an Item:</h2>
           <form className="shoppingInputs"onSubmit={addItem}>
            <label htmlFor="item-input">Item:</label>
                <input
                    id="item-input"
                    value={itemInput}
                    onChange={(event) => {setItemInput(event.target.value)}}
                    type="text"
                    placeholder=""
                    required /> <sup>*</sup>
                <label htmlFor="quantity-input">Quantity:</label>
                    <input
                        id="quantity-input"
                        value={quantityInput}
                        onChange={(event) => {setQuantityInput(event.target.value)}}
                        type="text"
                        placeholder=""
                        required /> <sup>*</sup>
                <label htmlFor="unit-input">Unit:</label>
                    <input
                    id="unit-input"
                        value={unitInput}
                        onChange={(event) => {setUnitInput(event.target.value)}}
                        type="text"
                        placeholder=""/>
                <button>Save</button>
                <p id="caption">* Required Field</p>
            </form>
        </div>
    )
}

export default ShoppingForm;