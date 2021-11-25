const {Router} = require('express');
const axios = require('axios');
const { CHARACTERS_URL } = require('../../constants');
const { Occupation } = require('../db');

const router = Router();

router.get('/occupations', async (req, res) => {
    const occupationApi = await axios.get(`${CHARACTERS_URL}`);
    const occupations = occupationApi.data.map(el => el.occupation);
    const occupationsSingle = occupations.map(el => {
        for(let i = 0; i<el.length; i++) return el[i]})
        console.log(occupationsSingle);
    occupationsSingle.forEach(el => {
        Occupation.findOrCreate({
            where: {name: el}
        })
    });
    const allOccupations = await Occupation.findAll();
    res.send(allOccupations);
});


module.exports = router;