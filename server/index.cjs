


const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const port = 3000

const connectDB = (url) => {
    console.log("Connecting to database...");
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("DB Connected Successfully"))
        .catch((err) => console.log(err));
};

const start = async () => {
    try {
        await connectDB("mongodb://localhost:27017/myLoginRegisterDB");
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})
const User = new mongoose.model("User", userSchema)



//Routes
app.post("/Username", (req, res) => {
    res.send("My API")
})


app.post("/deliver", async (req, res) => {
    const { name, email, password } = req.body
    await User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
            console.log("Here")
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
})



app.post("/test", (req, res) => {
    const { name } = req.body
    res.send({
        message: "success",
        name: name
    })
})

start();
