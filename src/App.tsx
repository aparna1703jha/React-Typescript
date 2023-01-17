import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//components
import {Header} from './components/appHeader';
import {ProductOptions} from './components/productOptions';
import {ShoppingSection} from './components/shoppingSection'
import  ProductApi  from './components/productApi';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      
        <ProductOptions/>
        <hr className='section-division'/>
        <ShoppingSection/>
        {/* <ProductApi/> */}

      
    </div>
  );
}

export default App;
