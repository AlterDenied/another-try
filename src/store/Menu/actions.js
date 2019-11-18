const RENDER_MENU_DRINKS = 'RENDER_MENU_DRINKS';

const setDrinks = (drinksArray) => {
    type: RENDER_MENU_DRINKS,
    payload: drinksArray
}