const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "courses.db",
    define: {
        timestamps: false
    }
});

module.exports = sequelize;