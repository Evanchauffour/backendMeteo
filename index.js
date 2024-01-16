// Importation des modules nécessaires
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const dataRoutes = require('./routes/dataRoutes');

// Configuration des variables d'environnement à partir du fichier .env
dotenv.config();

// Création de l'application Express
const app = express();

// Définition du port sur lequel le serveur écoutera, en utilisant le port spécifié dans le fichier .env ou le port 4000 par défaut
const port = process.env.PORT || 4000;

// Utilisation du middleware CORS pour gérer les autorisations de requête cross-origin
app.use(cors());

// Utilisation du middleware express.json() pour parser les données JSON des requêtes
app.use(express.json());

// Définition du point d'entrée des routes pour les données météorologiques dans l'URL "/api"
app.use("/api", dataRoutes);

// Mise en écoute du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
