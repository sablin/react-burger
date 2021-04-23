import React from 'react'
import {Counter, Tab, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredient from '../BurgerIngredient/burger-ingredient'
import styles from './burger-ingredients.module.css'

const BurgerIngredients = (props) =>{
    const [current, setCurrent] = React.useState('one')

    return (
        <div className={styles.ingredients}>
            <h2 className="text text_type_main-large">Соберите бургер</h2>

           <div style={{ display: 'flex' , width: 'inherit'}}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинка
      </Tab>
    </div>
    <h3>Булки</h3>
    <div className={styles.ingredientsChoise}>
      
            {props.items.map((item, index)=>(
                <BurgerIngredient image={item.image} price={item.price} name={item.name} key={index}/>
            ))}
        
      
    </div>
        </div>
    )
}


export default BurgerIngredients;