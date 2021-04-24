import react from 'react'
import styles from './burger-constructor.module.css'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = (props) => {
    return (
        <>
        <div className={styles.burgerConstructor}>
        <ul className={styles.BurgerContainer}>
    {props.items.map((info, index) => (

     <li  key={index}><ConstructorElement
     thumbnail={info.image_mobile}
      text={info.name}
      price={info.price}
      isLocked={false}
      type="top"
     
/>
</li>



    ))}
    </ul>
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