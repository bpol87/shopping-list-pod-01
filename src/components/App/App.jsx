import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import './App.css';

function App() {
    const [suppliesList, setSuppliesList] = useState([]);
    const [itemToEdit, setItemToEdit] = useState(null);

    useEffect(() => {
        getSupplies();
    }, []);

    const getSupplies = () => {
        axios({
            method: 'GET',
            url: '/api/shopping-list'
        })
            .then(response => {
                setSuppliesList(response.data);
            })
            .catch(err => {
                alert('Error getting supplies');
                console.log(err);
            });
    };

    return (
        <div className="App">
            <Header />
            <ShoppingForm getSupplies={getSupplies} itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} />
            <ShoppingList suppliesList={suppliesList} getSupplies={getSupplies} setItemToEdit={setItemToEdit} />
        </div>
    );
}

export default App;




