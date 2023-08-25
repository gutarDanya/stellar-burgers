export const GET_START_CONSRTUCTOR_INGREDIENTS = 'GET_START_CONSRTUCTOR_INGREDIENTS';
export const ADDED_INGREDIENT_TO_CONSTRUCTOR = 'ADDED_INGREDIENT_TO_CONSTRUCTOR';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';

export const getStartConstructorElementsGenerator= (startingredients) => {
    return {type: GET_START_CONSRTUCTOR_INGREDIENTS, payload: startingredients}
}

export const addConstructorElementGenerator = (ingredient) => {
    return {type: ADDED_INGREDIENT_TO_CONSTRUCTOR, payload: ingredient}
}