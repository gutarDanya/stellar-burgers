import {
    LOAD_START_INGREDIENTS_DATA,
    LOAD_START_INGREDIENTS_DATA_REQUEST,
    LOAD_START_INGREDIENTS_DATA_SUCCES,
    LOAD_START_INGREDIENTS_DATA_FAILED,
    ADD_NUMBER_TO_COUNT,
    REMOVE_NUMBER_FROM_COUNT
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
                ingredientData: action.payload
            }
        }
        case LOAD_START_INGREDIENTS_DATA_FAILED: {
            return {
                ...state,
                getIngredientsFailed: true,
                getIngredientsRequest: false
            }
        }
        case ADD_NUMBER_TO_COUNT: {
            return {
                ...state,
                ingredientData: state.ingredientData.map((ingredient) => ingredient._id === action.payload._id
                ? {...ingredient,
                     __v: ingredient.__v + 1}
                : ingredient)
            }
        }
        case REMOVE_NUMBER_FROM_COUNT: {
            return {
                ...state,
                ingredientData: state.ingredientData.map((ingredient) => ingredient._id === action.payload._id
                ? {...ingredient,
                __v: ingredient.__v - 1}
                :ingredient)
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