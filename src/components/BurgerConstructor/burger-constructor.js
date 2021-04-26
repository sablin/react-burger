import react from 'react'
import styles from './burger-constructor.module.css'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = (props) => {
    return (
        <>
        <div className={styles.burgerConstructor}>
        <span>
            {
              <li  key={props.items[0]._id}><ConstructorElement
              thumbnail={props.items[0].image_mobile}
               text={props.items[0].name}
               price={props.items[0].price}
               isLocked={true}
               type="top"
              
         />
         </li>
            }</span>
        <ul className={styles.BurgerContainer}>
    {props.items.map((info, index) => {
     return info.type !== 'bun' ? <li  key={info._id}><ConstructorElement
     thumbnail={info.image_mobile}
      text={info.name}
      price={info.price}
      isLocked={false}
      type="top"
     
/>
</li> :
     false
    }
    
    )}
    </ul>
    <span>
            {
              <li  key={props.items[props.items.length-1]._id}><ConstructorElement
              thumbnail={props.items[props.items.length-1].image_mobile}
               text={props.items[props.items.length-1].name}
               price={props.items[props.items.length-1].price}
               isLocked={true}
               type="top"
              
         />
         </li>
            }</span>
    <div className={styles.result}>
            <span className="text text_type_main-large"> 610 <CurrencyIcon type="primary" /> </span>
            <Button type="primary" size="medium">
 Оформить заказ
</Button>
        </div>
        </div>
  
        </>
    )
}


export default BurgerConstructor