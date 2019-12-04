import {combineReducers} from 'redux';
import { renderDrinksReducer } from './Menu/reducers';

export default combineReducers({
    menu: renderDrinksReducer
});