
exports.up = async function(knex) {
  //VIN number
  //Make
  //Model
  //Mileage
  //Sometimes, transmission type, status (clean/salvage)

  await knex.schema.createTable("cars", (table) => {
    table.increments("id");
    table.integer("VIN").notNull().unique();
    table.text("Make");
    table.text("Model");
    table.integer("Mileage");

    //!How should these be different? Should the rest be .notNull()?

    table.text("Transmission Type");
    table.text("Status");

    

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars");
};
