const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CharacterRoutes = require('./character');
const OccupationRoutes = require('./occupation');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', CharacterRoutes);

router.use('/', OccupationRoutes);



module.exports = router;