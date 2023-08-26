import {
    GET_START_CONSRTUCTOR_INGREDIENTS,
    ADDED_INGREDIENT_TO_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from '../actions/ingredientsConstructorAction';
import { data } from '../../../utils/data';

const initialState = {
constructorElements: [
    data[0],
    data[1],
    data[3],
    data[4],
    data[5],
    data[5],
    data[6],
    data[7],
    data[8],
    data[8],
]
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_START_CONSRTUCTOR_INGREDIENTS : {
            return {
            constructorElements: action.payload
            }
        }
        case ADDED_INGREDIENT_TO_CONSTRUCTOR: {
            return {
                ...state,
                constructorElements: [...state.constructorElements, action.payload]
            }
        }
        default: return state
    }
}