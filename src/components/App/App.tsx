import React, {useState} from 'react';
import AppHeader from '../AppHeader/app-header';
import BurgerConstructor from '../BurgerConstructor/burger-constructor';
import BurgerIngredients from '../BurgerIngredients/burder-ingredients';

import styles from './app.module.css'

import dataArr from '../../utils/data'

function App() {

   const [data, useData] = useState(dataArr)


  return (
    <div className={`${styles.App} ${styles.container}`}>
      <AppHeader />
      <main>
        <BurgerIngredients items={data}/>
        <BurgerConstructor items={data}/>
      </main>
    </div>
  );
}

export default App;
