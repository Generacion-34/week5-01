const sequelize = require("../utils/connection");
require("../models/City")

const testMigrate = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('DB reset 👌😊');

    process.exit()

  } catch (error) {
    console.log(error);
  }
}


testMigrate()