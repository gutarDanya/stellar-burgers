import React from 'react'
import { CURRENT_INGREDIENTS_TO_MODAL } from '../actions/currentIngredientsToModalAction';
import { data } from '../../../utils/data';

const initialState = {
    ingredientsData: []
}

export const currentIngredientsReudecer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_INGREDIENTS_TO_MODAL: {
            return {
                ...state,
                ingredientsData: data
                //ЗДЕСЬ ДОЛЖНЫ ПОЯВЛЯТСЯ ДАННЫЕ ТЕКУЩЕГО ПРОСМАТРИВАЕМОГО ИНГРЕДИЕНТА
            }
        }
        default: return state
    }
}