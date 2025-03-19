import "dotenv/config";
import Fastify from "fastify";
import { getApiMovies } from "./getApiMovies.js";
import { getApiSeries } from "./getApiSeries.js";
import { getApiWatchlist } from "./getApiWatchlist.js";
import { postAddToWatchlist } from "./postAddToWatchlist.js";
import { postRemoveFromWatchlist } from "./removeFromWatchlist.js";
import { getHelloWorld } from "./getHelloWorld.js";
import { getApiWeather } from "./getApiWeather.js";

const fastify = Fastify({
  logger: true,
});

fastify.get("/api/weather", getApiWeather); // Route pour obtenir la météo
fastify.get("/", getHelloWorld);
fastify.get("/api/movies", getApiMovies);
fastify.get("/api/series", getApiSeries);
fastify.get("/api/watchlist", getApiWatchlist);
fastify.post("/api/watchlist", postAddToWatchlist);

fastify.delete("/api/watchlist", postRemoveFromWatchlist);
fastify.listen(
  {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
  },
  function (err) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  }
);
