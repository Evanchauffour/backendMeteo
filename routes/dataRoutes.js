const express = require('express');
const dataController = require('../controllers/dataController');

// Création d'un objet Router d'express pour définir les routes
const router = express.Router();

// Définition d'une route POST pour obtenir les données météorologiques actuelles
router.post('/getData', dataController.getData);

// Définition d'une route POST pour obtenir les prévisions météorologiques
router.post('/getDataForcast', dataController.getDataForcast);

// Exportation du routeur pour être utilisé ailleurs dans l'application
module.exports = router;

