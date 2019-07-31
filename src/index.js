const express = require('express')

const userRouter = require('./routers/UserRouter')
const taskRouter = require('./routers/TaskRouter')
const configPort = require('./config/port')

const app = express()
const port = configPort

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/', (req,res) =>{
    res.send('<h1>Selamat datang di Heroku API</h1>')
})

app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})