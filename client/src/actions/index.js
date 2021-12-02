import axios from 'axios';
import { CHARACTERS_LOCAL_URL, GET_CHARACTERS, FILTER_BY_STATUS, FILTER_CREATED_DB } from '../constants';

export function getCharacters(){
    return async function(dispatch){
        var json = await axios.get(`${CHARACTERS_LOCAL_URL}`,{});
        return dispatch({
            type: GET_CHARACTERS,
            payload: json.data
        })
    }
}

export function filterCharactersByStatus(payload){
    console.log(payload)
    return {
        type: FILTER_BY_STATUS,
        payload
    }
}

export function filterByCreateInDb(payload){
    return {
        type: FILTER_CREATED_DB,
        payload
    }
}