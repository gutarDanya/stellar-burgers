import {
    LOAD_START_INGREDIENTS_DATA,
    LOAD_START_INGREDIENTS_DATA_REQUEST,
    LOAD_START_INGREDIENTS_DATA_SUCCES,
    LOAD_START_INGREDIENTS_DATA_FAILED
} from '../actions/apiAction'

const initialState = {
    ingredientData: [],
    getIngredientsFailed: false,
    getIngredientsRequest: false
}

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_START_INGREDIENTS_DATA_REQUEST: {
            return {
                ...state,
                getIngredientsRequest: true,
                getIngredientsFailed: false
            }
        }
        case LOAD_START_INGREDIENTS_DATA_SUCCES: {
            return {
                ...state,
                getIngredientsRequest: false,
                getIngredientsFailed: false,
                ingredientData: [...state.ingredientData, action.payload]
            }
        }
        case LOAD_START_INGREDIENTS_DATA_FAILED: {
            return {
                ...state,
                getIngredientsFailed: true,
                getIngredientsRequest: false
            }
        }
        default: return state
    }
}

export const getData = () => {
    return function(dispatch) {
        dispatch({
            type: LOAD_START_INGREDIENTS_DATA_REQUEST
        })
        fetch('https://norma.nomoreparties.space/api/ingredients')
        .then(res => res.json())
        .then(res => {
                dispatch({
                    type: LOAD_START_INGREDIENTS_DATA_SUCCES,
                    payload: res.data
                })

        })
        .catch(err => {
            dispatch({
                type: LOAD_START_INGREDIENTS_DATA_FAILED
            })
        })
    }
}