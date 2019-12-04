import React from 'react';
import s from "./Menu.module.sass"
import { Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import { renderDrinksReducer } from './../../store/Menu/reducers';


function createPathArray(path, arrLength, nameArray) {
    const array = [];
    for (let i = 0; i < arrLength; i++) {
        let completePath = require(path + i + ".png");
        let completeObject = {
            itemName: nameArray[i],
            srcPath: completePath
        }
        array.push(completeObject);
    }
    console.log(array);
    return array
}

function renderPreview(src) {
    return (
        <div className={s.menuPreviewItem}>
            <div className={s.menuPreviewImg}>
                <img src={src} alt="" />
            </div>
            <div className={s.menuPreviewDescription}>
                <h1></h1>
                <p></p>
            </div>
        </div>
    )
}

function renderMenuItems(infoItemArray) {
    return (
        <div className={s.menuItemsList}>
            {infoItemArray.map((itemObject) => {
                return (
                    <div className={s.menuItem} onClick={renderPreview}>
                        <p><img src={itemObject.srcPath} alt="" /></p>
                        <p>{itemObject.itemName}</p>
                    </div>
                )
            })}
        </div>
    )
}

let dBeerNames = ["Braunwald", "Porter", "Captain Morion", "John Gaspar", "Milk Stout", "Mr. Stout", "Stout", "Hamer & Sikkel"];
let lBeerNames = ["Берлингер", "Новая Бавария", "Микулин 900", "Lager", "Corona Extra", "Belgian Abbey Ale", "L.Apa", "Goldy"]
let nonAlcNames = ["Red Bull", "Red Bull Tropical", "Red Bull Summer", "Red Bull SugarFree"]

export class Menu extends React.Component {
    render() {
        return (
            <div className={s.menu}>
                <Navigation />
                <MenuContext />
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

const MenuContext = () => {
    return (
        <div className={s.menuContext}>
            <MenuList />
            <PreviewItem />
        </div>
    )
}

const MenuList = () => {
    return (
        <div className={s.menuCurrentList}>
            <Switch>
                <Route path="/menu/snacks">
                    <Snacks />
                </Route>
                <Route path="/menu/desserts">
                    <Desserts />
                </Route>
                <Route path="/menu/drinks">
                    <Drinks />
                </Route>
                <Route path="/menu/hookahs">
                    <Hookahs />
                </Route>
            </Switch>
        </div>
    )
}

const PreviewItem = () => {
    return (
        <div className={s.menuPreviewItem}>
            <div className={s.menuPreviewImg}>
                <img src="" alt="" />
            </div>
            <div className={s.menuPreviewDescription}>
                <h1></h1>
                <p></p>
            </div>
            <div className={s.menuPreviewButtons}>
                <button>Добавить к заказу</button>
            </div>
        </div>
    )
}

const Snacks = () => {
    return (
        <div>
            {/* {renderMenuItems( createPathArray('./img/snacks/snacks', 8), "Закуски")} */}
        </div>
    )
}

const Desserts = () => {
    return (
        <div>
            {/* {renderMenuItems( createPathArray('./img/desserts/desserts', 8), "Десерты")} */}
        </div>
    )
}

const Hookahs = () => {
    return (
        <div></div>
    )
}

const Drinks = () => {
    return (
        <div className={s.menuItemsContainer}>
            <div className={s.menuItemsNav}>
                <Link to="/menu/drinks/dark">Тёмное</Link>
                <Link to="/menu/drinks/light">Светлое</Link>
                <Link to="/menu/drinks/non_alc">Безалкогольные</Link>
            </div>
            <Switch>
                <Route path="/menu/drinks/dark">
                    {renderMenuItems(createPathArray('./img/drinks/dBeer', 8, dBeerNames))}
                </Route>
                <Route path="/menu/drinks/light">
                    {renderMenuItems(createPathArray('./img/drinks/lBeer', 8, lBeerNames))}
                </Route>
                <Route path="/menu/drinks/non_alc">
                    {renderMenuItems(createPathArray('./img/drinks/nonAlc', 4, nonAlcNames))}
                </Route>
            </Switch>
        </div>
    )
}

export default Menu;