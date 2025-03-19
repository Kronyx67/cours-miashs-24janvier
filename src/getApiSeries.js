import { searchSeries } from "./tmdbApi.js";

export const getApiSeries = async (request, reply) => {
  try {
    const series = await searchSeries("Stranger Things");
    console.log(series);
    reply.send(series);
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
};
