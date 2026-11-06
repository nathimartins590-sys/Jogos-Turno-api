import express from 'express'
import database from './config/database.js'
import router from './router/jogo.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/user', router)

database.db.sync({ force: false })
    .then(() => {
        app.listen(3000, () => {
            console.log("Bah ta rodando 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })