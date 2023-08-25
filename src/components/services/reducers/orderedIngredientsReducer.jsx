import { COLLECT_ORDER, OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW } from "../actions/orderedIngredientsAction";

const initialState = {
    modalOpened: false,
    orderedIngredinets: []
}


export const orderedIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COLLECT_ORDER: {
            return {
                orderedIngredientsReducer: [action.payload]
            }
        }
        case OPEN_MODAL_WINDOW: {
            return {
                modalOpened: true
            }
        }
        case CLOSE_MODAL_WINDOW: {
            return {
                modalOpened: false
            }
        }
        default: return state
    }
}