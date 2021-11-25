const {Router} = require('express');
const {getAllCharacters} = require('../controllers/CharacterController');
const { Character, Occupation } = require('../db');

const router = Router();


router.get('/characters', async (req, res) =>{
    const name = req.query.name;
    let charactersTotal = await getAllCharacters();
    if(name){
        let characterName = await charactersTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        characterName.length ?
        res.status(200).send(characterName) : 
        res.status(404).send('El personaje no se encontro');
    } else {
        res.status(200).send(charactersTotal)
    }
} );


router.post('/character', async (req, res) => {
    let {
        name,
        nickname,
        birthday,
        image,
        status,
        createdInDb,
        occupation
    } = req.body;

    let characterCreated = await Character.create({
        name,
        nickname,
        birthday,
        image,
        status,
        createdInDb
    });

    let occupationDb = await Occupation.findAll({
        where: {name: occupation}
    });

    characterCreated.addOccupation(occupationDb);

    res.send('Personaje creado exitosamente')
});

module.exports = router;