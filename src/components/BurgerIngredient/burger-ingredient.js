import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'

import styles from './burger-ingredient.module.css'


const BurgerIngredient = (props) =>{
    return (
        <div class={styles.ingridientBox}>
            <img src={props.image} alt={props.name}/>
            <p className="text text_type_main-medium">{props.price}  <CurrencyIcon type="primary" /></p>
            <p className="text text_type_main-default">{props.name}</p>
        </div>
    )
}

export default BurgerIngredient