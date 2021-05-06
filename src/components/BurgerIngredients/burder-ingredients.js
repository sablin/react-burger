import React from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
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
    
    <div className={styles.ingredientsChoise}>
      <div className={styles.ingidientsType}> 
            <h3 className="text text_type_main-medium">Булки</h3>
            {props.items.map((item, index)=>{
                 if(item.type === 'bun'){
                 return  <BurgerIngredient image={item.image} price={item.price} name={item.name} type={item.type} key={item._id}/>
            }else{
              return false
            }
            }
            )}
      </div>
      <div className={styles.ingidientsType}>
            <h3 className="text text_type_main-medium">Соусы</h3>
            {props.items.map((item, index)=>{
                 if(item.type === 'main'){
                 return  <BurgerIngredient image={item.image} price={item.price} name={item.name} type={item.type} key={item._id}/>
            }else{
              return false
            }
            }
            )}
      </div>
      <div className={styles.ingidientsType}>
            <h3 className="text text_type_main-medium">Начинка</h3>
            {props.items.map((item, index)=>{
                 if(item.type === 'sauce'){
                 return  <BurgerIngredient image={item.image} price={item.price} name={item.name} type={item.type} key={item._id}/>
            }else{
              return false
            }
            }
            )}
      </div>
      
    </div>
        </div>
    )
}


export default BurgerIngredients;