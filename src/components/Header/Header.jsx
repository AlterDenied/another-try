import React from 'react';
import s from "./Header.module.sass";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className={s.header}>
                <Link to="/">
                    <div className={s.header__logo}></div>
                </Link>
                <div className={s.header__navBlock}>
                        <div className={`${s.header__navButton} ${s.navMenu}`}>
                            <Link to="/menu">меню</Link>
                        </div>
                        <div className={`${s.header__navButton} ${s.navPromotions}`}>
                            <Link to="/promo">акции</Link>
                        </div>
                        <div className={`${s.header__navButton} ${s.navGallery}`}>
                            <Link to="/gallery">галерея</Link>
                        </div>
                        <div className={`${s.header__navButton} ${s.navEvents}`}>
                            <Link to="/events">события</Link>
                        </div>
                        <div className={`${s.header__navButton} ${s.navRadio}`}>
                            <Link to="/radio">радио</Link>
                        </div>
                </div>
            </div>
        )
    }
}

export default Header;