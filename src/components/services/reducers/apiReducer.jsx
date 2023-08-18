import React from 'react'
import { LOAD_START_INGREDIENTS } from '../actions/apiAction';
import { data } from '../../../utils/data';

const initialState = {
    ingredientsData: []
}

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_START_INGREDIENTS: {
            return {
                ...state,
                ingredientsData: data
                //здесь должны будут быть данные с сервера
            }
        }
        default: return state
    }
}