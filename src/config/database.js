const { connectionConfig } = require('./.env');

module.exports = {
  dialect: 'postgres',
  host: connectionConfig.host,
  port: connectionConfig.port,
  username: connectionConfig.username,
  password: connectionConfig.password,
  database: connectionConfig.database,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
