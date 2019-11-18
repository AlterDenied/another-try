import React from 'react';
import s from "./Menu.module.sass"
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div className={s.menu}>
                <Navigation />
                <ContextMenu />
            </div>
        )
    }
}

const Navigation = () => {
    return (
        <div className={s.menuNavList}>
            <Link to="/menu/snacks" className={s.menuNavItem}>закуски</Link>
            <Link to="/menu/desserts" className={s.menuNavItem}>десерты</Link>
            <Link to="/menu/drinks" className={s.menuNavItem}>напитки</Link>
            <Link to="/menu/hookahs" className={s.menuNavItem}>кальяны</Link>
        </div>
    )
}

const ContextMenu = () => {
    return (
        <Drinks />
    )
}

const Drinks = () => {
    return (
        <div className={s.menuDrinks}>
            <div className={s.menuDrinksLightBeer}>
                <div className={s.menuDrinksItem}>
                    <img src={require("../../content/xs/img/menu/drinks/dBeer0.png")} alt="dBeer0"/>
                </div>
            </div>
            <div className={s.menuDrinksDarkBeer}>

            </div>
            <div className={s.menuDrinksNonAlcohol}>

            </div>
        </div>
    )
}

export default Menu;