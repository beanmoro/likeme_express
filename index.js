import express from 'express'
import path from 'path';
import postRoutes from './routes/post.route.js'

const app = express()
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/posts', postRoutes)

app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`)
})