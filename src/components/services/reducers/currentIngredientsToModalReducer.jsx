import React from "react";
import { GET_CURRENT_INGREDIENT_TO_MODAL, REMOVE_CUURENT_INGREDIENT_FROM_MODAL } from '../actions/currentIngredientsToModalAction'

const initialState = {
    currentIngredient: {}
}

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_INGREDIENT_TO_MODAL : {
            return {
                ...state,
                currentIngredient: action.payload
            }
        }
        case REMOVE_CUURENT_INGREDIENT_FROM_MODAL : {
            return {
                ...state,
                currentIngredient: {}
            }
        }
        default : return state
    }
}