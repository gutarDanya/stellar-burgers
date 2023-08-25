import { apiReducer } from "./apiReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { currentIngredientReducer } from "./currentIngredientsToModalReducer";
import { constructorReducer } from "./ingredientsConstructorReducer";
import { orderedIngredientsReducer } from './orderedIngredientsReducer'


export const rootReducer = combineReducers({
    apiReducer,
    currentIngredientReducer,
    constructorReducer,
    orderedIngredientsReducer
})