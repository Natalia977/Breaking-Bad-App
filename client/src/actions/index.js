import axios from 'axios';
import { CHARACTERS_LOCAL_URL, GET_CHARACTERS } from '../constants';

export function getCharacters(){
    return async function(dispatch){
        var json = await axios.get(`${CHARACTERS_LOCAL_URL}`,{});
        return dispatch({
            type: GET_CHARACTERS,
            payload: json.data
        })
    }
}