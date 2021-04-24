import React from 'react'
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'



import styles from './app-header.module.css'

const AppHeader = () =>{
return (
    
    <header className={styles.header}>
        <nav>
            <a href="/" className="p-4"> 
            <BurgerIcon type="primary" /> 
            <span className="text text_type_main-default">Конструктор</span>
            </a>
            <a href="/" className="p-4"> 
            <ListIcon type="primary" /> 
            <span className="text text_type_main-default">Лента заказов</span>
            </a>
        </nav>
        <Logo />
        <a href="/" className="p-4">  
        <ProfileIcon type="primary" />
        <span className="text text_type_main-default">Личный кабинет</span>
        </a>
       
    </header>
)

}

export default AppHeader