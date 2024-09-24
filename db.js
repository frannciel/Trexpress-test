const { Pool } = require('pg');
require('dotenv').config();

// Configurações de conexão com o PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432, // Porta padrão do PostgreSQL
    ssl: {
        rejectUnauthorized: false // Neon pode usar SSL/TLS por padrão
    }
});

// Função para realizar uma consulta
const query = (text, params) => pool.query(text, params);

module.exports = {
    query,
};
