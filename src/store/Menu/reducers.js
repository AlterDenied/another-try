const defaultState = {
    drinks: {
        dBeer: 7,
        lBeer: 7,
        nonAlc: 5
    }
};

const renderDrinksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RENDER_MENU_DRINKS:
                for (let i = 0; i < state.drinks.dBeer; i++) {
                    return (
                        <div className = {s.menuDrinksItem}>
                            <img src={require("../../content/xs/img/menu/drinks/dBeer" + i + ".png")}/>
                        </div>  
                }
            )
    }
}