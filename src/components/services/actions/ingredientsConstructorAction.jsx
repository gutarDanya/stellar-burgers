
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const ADD_BUN_TO_CONSTRUCTOR = 'ADD_BUN_TO_CONSTRUCTOR';
export const ADD_MAIN_TO_CONSTRUCTOR = 'ADD_MAIN_TO_CONSTRUCTOR';

export const addBun = (bun) => {
    return ({type: ADD_BUN_TO_CONSTRUCTOR, payload: bun })
}

export const addMainIngredient = (ingredient) => {
    return ({type: ADD_MAIN_TO_CONSTRUCTOR, payload: ingredient})
}

export const removeIngredient = (ingredient) => {
    return ({type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, payload: ingredient})
}