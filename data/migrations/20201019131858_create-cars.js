
//Exampel has (knes, Promise), what does that mean? A promise will be a parameter?
exports.up = function(knex) {
    //? Is TBL the same as table?
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.integer('VIN').unique().notNullable();
    })

};

exports.down = function(knex) {
  
};
