import React from 'react';
import { GET_CONSTRUCTOR_INGREDIENTS } from '../reducers/ingredientsConstructorReducer';
import { data } from '../../../utils/data';

const initialState = {
    currentIngredients: []
}

export const constuctorIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONSTRUCTOR_INGREDIENTS: {
            return {
                currentIngredients: data
                //здесь должны быть данные для конструктора
            }
        }
        default: return state
    }
}
