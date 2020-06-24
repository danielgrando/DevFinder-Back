const { response } = require("express")
const parseStringAsArray = require('../utils/parseStringAsArray');

const Dev = require('../models/Dev');

//Buscar todos os devs num raio de 10km
//Filtrar por tecnolgias

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });
    return res.json({ devs });

  }
}
