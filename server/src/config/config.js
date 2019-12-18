module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'hivetracker',
    user: process.env.DB_USER || 'hivetracker',
    password: process.env.DB_PASS || 'hivetracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './hivetracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}