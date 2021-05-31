var express = require('express');
const { index, puertoGallo, chana, timbu, comoLlego, contacto, conoceMas } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', index);
router.get("/puerto-gallo", puertoGallo);
router.get("/chana", chana);
router.get("/timbu", timbu);
router.get("/como-llego", comoLlego);
router.get("/contacto", contacto);
router.get("/conoce-mas", conoceMas);

module.exports = router;
