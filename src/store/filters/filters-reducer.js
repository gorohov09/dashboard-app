import { ADD_FILTER, CLEAR_ALL_FILTERS, REMOVE_FILTER } from "./filters-actions";

export const filtersReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_FILTER: {
            return [
                ...state,
                action.filter
            ]
        }
        case REMOVE_FILTER: {
            return [
                ...state.filter(item => item !== action.filter)
            ]
        }
        case CLEAR_ALL_FILTERS: {
            return []
        }
        default: {
            return state;
        }
    }
}