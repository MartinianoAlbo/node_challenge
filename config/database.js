const mongoose = require('mongoose')

const DB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // autoIndex: true
    })

    const url = `${db.connection.host}:${db.connection.port}/${db.connection.name}`
    // console.log(`Mongo DB conectado en ${url}`)

  } catch (error) {
    console.log(error)

    process.exit(1)

  }
}

module.exports = { DB }