// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');

// Cria tabela no BD e seus campos
const Cliente = sequelize.define("Product", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    description: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    price: {
        allowNull: false,
        type: Sequelize.INTEGER(),
    },
    stockQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER(),
    }
});

module.exports = Cliente;