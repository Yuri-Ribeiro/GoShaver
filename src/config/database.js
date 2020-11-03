const { connection } = require('./.env');

module.exports = {
  dialect: 'postgres',
  host: connection.host,
  port: connection.port,
  username: connection.username,
  password: connection.password,
  database: connection.database,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
