import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/app-header';
import BurgerConstructor from './components/BurgerConstructor/burger-constructor';
import BurgerIngredients from './components/BurgerIngredients/burder-ingredients';

import dataArr from './utils/data'

function App() {
  return (
    <div className="App container">
      <AppHeader />
      <main>
        <BurgerIngredients items={dataArr}/>
        <BurgerConstructor items={dataArr}/>
      </main>
    </div>
  );
}

export default App;
