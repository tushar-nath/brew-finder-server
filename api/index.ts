import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import session from 'express-session'
import AppConfig from '../config'
import healthRoute from '../routes/healthRoute'
import { createServer } from 'http'

dotenv.config()

const app = express()

// Set up sessions to store user data
app.use(
  session({
    secret: 'quikpoll-session',
    resave: true,
    saveUninitialized: true,
  })
)

const corsOptions = {
  // TODO: Only allow all origins when running locally but restrict in production
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json({ limit: AppConfig.BODY_PARSER_LIMIT }))

app.use('/api/healthcheck', healthRoute)

const PORT = process.env.PORT || 8000
const httpServer = createServer(app)

httpServer.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})

process.on('SIGTERM', close)
process.on('SIGINT', close)

function close() {
  console.log('Shutting down gracefully')
  process.exit(0)
}

export default app
