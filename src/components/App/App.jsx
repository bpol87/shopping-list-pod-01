import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.css';


function App() {

    let [suppliesList, setSuppliesList] = useState([]);
    
    
    useEffect(() => {
        getSupplies()
      }, [])
    
      const getSupplies = () => {
        axios({
            method: 'GET',
            url:'/api/shopping-list'
      })
          .then(response => {
            console.log(response.data)
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
            <ShoppingList suppliesList={suppliesList} getSupplies={getSupplies} />
            <Footer />
        </div>
    );
}

export default App;

