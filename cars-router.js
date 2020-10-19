
//!!This whole thing may be in the wrong file
// THe code in canvas isn't synicing up with lecture code and I'm very confused
//!!!This code if for "wherever we configure our database". But what does that mean exactly?
//!! He has a seperate config file from class. Is he just skipping using this shortcut?

const knex = require('knex');

const config = require('./knexfile.js')
const db = knex(config.development);



module.exports = db;