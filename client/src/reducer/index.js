import { GET_CHARACTERS, FILTER_BY_STATUS, FILTER_CREATED_DB } from '../constants';

const initialState = {
    characters: [],
    allCharacters: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                allCharacters: action.payload
            }

        case FILTER_BY_STATUS:
            const allCharacters = state.allCharacters;
            const statusFiltered = action.payload === 'All'? allCharacters : allCharacters.filter(el => el.status === action.payload)
            return {
                ...state,
                characters: statusFiltered
            }

        case FILTER_CREATED_DB:
            const filterCreated = action.payload === 'created'? state.allCharacters.filter(el => el.createdInDb): state.allCharacters.filter(el => !el.createdInDb);
            return {
                ...state,
                characters: action.payload === 'all'? state.allCharacters : filterCreated
            }

        default: return state;    }

}

export default rootReducer;