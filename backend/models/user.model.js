const sequelize = require('sequelize');
const conexao = require('../config/database');

let User = conexao.define(
    'User', 
    {
        id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        username: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
        },
        email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
        },
        numero_telefone: {
        type: sequelize.STRING,
        allowNull: true,
        validate: {
            is: /^[0-9]{9}$/, // Validates a 9-digit phone number
        },
        },
        password: {
        type: sequelize.STRING,
        allowNull: false,
        },
        admin: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        }
    },
    {   
        tableName: 'users',
        timestamps: true, // adiciona automaticamente createdAt e updatedAt fields
        createdAt: 'data_registo', // nome para createdAt
        updatedAt: 'data_atualizacao', // nome para updatedAt
    }
);