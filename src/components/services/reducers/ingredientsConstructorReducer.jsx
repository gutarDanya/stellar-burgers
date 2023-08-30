import {
    ADD_BUN_TO_CONSTRUCTOR,
    ADD_MAIN_TO_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    GET_ALL_INGREDIENTS
} from '../actions/ingredientsConstructorAction';
import { data } from '../../../utils/data';

const initialState = {
    allIngredients: [],
    bun: [],
    main: []
}

//Увеличь занчение коунт при перетаскивании ингредиента

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUN_TO_CONSTRUCTOR : {
            return {
                ...state,
                bun: action.payload
            }
        }
        case ADD_MAIN_TO_CONSTRUCTOR: {
            return {
                ...state,
                main: [...state.main, action.payload]
            }
        }
        case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
            return {
                ...state,
                main: state.main.filter((ingredient) => ingredient._id !== action.payload._id)
            }
        }
        case GET_ALL_INGREDIENTS: {
            return {
                ...state,
                allIngredients: [...state.allIngredients, action.payload]
            }
        }
        default: return state
    }
}