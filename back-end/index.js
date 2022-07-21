const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./router/user')
const {connectToDb, db} = require('./db')
app.use(bodyParser.json({ extended: true }));


app.get('/', (req, res  ) => {
    res.json('Hello world')
    console.log('database', db)
})

app.use('/user',userRouter)


const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log("This is" + port);
connectToDb();
});