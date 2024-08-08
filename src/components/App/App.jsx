import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import './App.css';


function App() {

    let [suppliesList, setSuppliesList] = useState([]);
    
    
    useEffect(() => {
        getSupplies()
      }, [])
    
      const getSupplies = () => {
        axios.get('/api/shopping-list')
          .then(response => {
            setSuppliesList(response.data)
          })
          .catch(err => {
            alert('error getting supplies');
            console.log(err);
          })
      }

    return (
        <div className="App">
            <Header />
            <ShoppingForm getSupplies={getSupplies}/>
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;

