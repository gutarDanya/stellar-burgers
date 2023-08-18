import React from 'react';
import { GET_ORDERED_INGREDIENTS } from '../actions/orderedIngredientsAction';
import { data } from '../../../utils/data';

const initialState = {
    orderedIngredients: []
}

export const constuctorIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERED_INGREDIENTS: {
            return {
                orderedIngredients: data
                //ЗДЕСЬ ДОЛЖЕН БЫТЬ ОБЪЕКТ С ФИНАЛЬНЫМ ЗАКАЗОМ
            }
        }
        default: return state
    }
}
