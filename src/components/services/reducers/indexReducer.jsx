import { apiReducer } from "./apiReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { currentIngredientReducer } from "./currentIngredientsToModalReducer";


export const rootReducer = combineReducers({
    apiReducer,
    currentIngredientReducer
})