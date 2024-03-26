// Fonction asynchrone pour récupérer les données météorologiques actuelles
exports.getData = async (req, res) => {
    // Récupération de la ville à partir de la requête HTTP
    const { city } = req.body;

    try {
        if (!city) {
            throw new Error('Veuillez entrer une ville');
        } else {
        // Appel à l'API OpenWeatherMap pour les données météorologiques actuelles
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
        // Vérification de la réponse HTTP
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Extraction des données JSON de la réponse
        const data = await response.json();
        
        // Envoi des données au client avec un statut HTTP 200
        res.status(200).json(data);
    }
    } catch (err) {
        // Gestion des erreurs - affichage dans la console et envoi d'une réponse d'erreur au client
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
};

// Fonction asynchrone pour récupérer les prévisions météorologiques
exports.getDataForcast = async (req, res) => {
    // Récupération de la ville à partir de la requête HTTP
    const { city } = req.body;

    try {
        if (!city) {
            res.status(400).json({ error: 'Veuillez saisir une ville', message: err.message });
        } else {
        // Appel à l'API OpenWeatherMap pour prévisions des 5 prochains jours
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ba8a85f4873c3ca57ec385ba2911a698`);

        // Vérification de la réponse HTTP
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Extraction des données JSON de la réponse
        const data = await response.json();
        
        // Envoi des données au client avec un statut HTTP 200
        res.status(200).json(data);
    }
    } catch (err) {
        // Gestion des erreurs - affichage dans la console et envoi d'une réponse d'erreur au client
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
};
