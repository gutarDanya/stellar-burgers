import {
    ADD_BUN_TO_CONSTRUCTOR,
    ADD_MAIN_TO_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from '../actions/ingredientsConstructorAction';
import { data } from '../../../utils/data';

const initialState = {
bun: data[0],
main: [
    data[1],
    data[2],
    data[3],
    data[4]
]
}

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
                main: state.main.filter((ingredient) => ingredient._id === action.payload._id)
            }
        }
        default: return state
    }
}