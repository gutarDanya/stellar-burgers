import {
    GET_START_CONSRTUCTOR_INGREDIENTS,
    ADDED_INGREDIENT_TO_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from '../actions/ingredientsConstructorAction';

const initialState = {
constructorElements: []
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_START_CONSRTUCTOR_INGREDIENTS : {
            return {
            constructorElements: [ action.payload]
            }
        }
        case ADDED_INGREDIENT_TO_CONSTRUCTOR: {
            return {
                constructorElements: [...state.constructorElements, action.payload]
            }
        }
        default: return state
    }
}