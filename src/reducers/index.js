import { UPDATE_PREVIEW } from "../constants/action-types";

const initialState = {
    textArea: ''
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PREVIEW: {
            return Object.assign({}, state, {
                textArea: action.payload
            });
        }
        default:
            return state;
    }
}

export default rootReducer;