import react from 'react'
import styles from './burger-constructor.module.css'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = (props) => {
    return (
        <div className={styles.burgerConstructor}>
    {props.items.map((info, index) => (
    <div className={styles.BurgerContainer}>
     <ConstructorElement
     thumbnail={info.image_mobile}
      text={info.name}
      price={info.price}
      isLocked={false}
      type="top"
      key={index}
/>
</div>
    ))}
       
        </div>
    )
}


export default BurgerConstructor