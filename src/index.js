const express = require('express')

const userRouter = require('./routers/UserRouter')
const taskRouter = require('./routers/TaskRouter')
const configPort = require('./config/port')

const app = express()
const port = configPort

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})