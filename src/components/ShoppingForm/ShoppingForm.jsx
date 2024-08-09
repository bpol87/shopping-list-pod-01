import { useState, useEffect } from 'react';
import axios from 'axios';

function ShoppingForm({ getSupplies, itemToEdit, setItemToEdit }) {
    const [itemInput, setItemInput] = useState('');
    const [quantityInput, setQuantityInput] = useState('');
    const [unitInput, setUnitInput] = useState('');

    useEffect(() => {
        if (itemToEdit) {
            setItemInput(itemToEdit.name);
            setQuantityInput(itemToEdit.quantity);
            setUnitInput(itemToEdit.unit);
        }
    }, [itemToEdit]);

    const addItem = (event) => {
        event.preventDefault();
        if (itemToEdit) {
            axios({
                method: 'PUT',
                url: `/api/shopping-list/edit/${itemToEdit.id}`,
                data: {
                    name: itemInput,
                    quantity: quantityInput,
                    unit: unitInput,
                },
            })
                .then((response) => {
                    resetForm();
                    getSupplies();
                })
                .catch((error) => {
                    console.log('Error in PUT response from server: ', error);
                });
        } else {
            axios({
                method: 'POST',
                url: '/api/shopping-list',
                data: {
                    name: itemInput,
                    quantity: quantityInput,
                    unit: unitInput,
                },
            })
                .then((response) => {
                    resetForm();
                    getSupplies();
                })
                .catch((error) => {
                    console.log('Error in POST response from server: ', error);
                });
        }
    };

    const resetForm = () => {
        setItemInput('');
        setQuantityInput('');
        setUnitInput('');
        setItemToEdit(null);
    };

    return (
        <>
            <h2>{itemToEdit ? 'Edit Item' : 'Add an Item'}:</h2>
            <form onSubmit={addItem}>
                <h5>Item:</h5>
                <input
                    value={itemInput}
                    onChange={(event) => setItemInput(event.target.value)}
                    type="text"
                    placeholder=""
                />
                <h5>Quantity</h5>
                <input
                    value={quantityInput}
                    onChange={(event) => setQuantityInput(event.target.value)}
                    type="text"
                    placeholder=""
                />
                <h5>Unit</h5>
                <input
                    value={unitInput}
                    onChange={(event) => setUnitInput(event.target.value)}
                    type="text"
                    placeholder=""
                />
                <button>{itemToEdit ? 'Update' : 'Save'}</button>
                {itemToEdit && <button onClick={resetForm}>Cancel</button>}
            </form>
        </>
    );
}

export default ShoppingForm;
