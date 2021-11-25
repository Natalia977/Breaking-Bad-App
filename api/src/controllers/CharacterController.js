const axios = require('axios');
const { Character, Occupation } = require('../db');
const { CHARACTERS_URL } = require('../../constants');

//getApiInfo trae la informacion de la API
const getApiInfo = async ()=>{
    const apiUrl = await axios.get(`${CHARACTERS_URL}`);
    const apiInfo = await apiUrl.data.map(el => {
        return {
            name: el.name,
            img: el.img,
            nickname: el.nickname,
            status: el.status,
            id: el.char_id,
            occupation: el.occupation.map(el=>el),
            birthday: el.birthday,
            appearance: el.appearance.map(el=>el), 
        }
    })
    return apiInfo;
};

//getDbInfo trae la informacion de la DB
const getDbInfo = async () => {
    return await Character.findAll({
        include: {
            model: Occupation,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

//getAllCharacters concatena toda la info de la API y de la DB
const getAllCharacters = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

module.exports = {
    getApiInfo,
    getDbInfo,
    getAllCharacters
}