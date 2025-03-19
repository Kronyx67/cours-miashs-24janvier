//import fetch from "node-fetch"; // Si nécessaire, installe `node-fetch`

// Fonction pour récupérer la météo actuelle
export const getWeather = async (location) => {
  const apiKey = "YOUR_API_KEY"; // Remplace par ta propre clé API
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  
  const weatherData = await response.json();
  
  return weatherData;
};

// Fonction pour traiter les requêtes dans ton API
export const getApiWeather = async (request, reply) => {
  try {
    const location = request.query.location || "Paris"; // Utiliser Paris par défaut
    const weather = await getWeather(location); // Récupérer les données météo
    reply.send(weather); // Retourner les données météo sous forme de réponse
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
};