const express = require('express')
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");
const adminRoutes = require('./routes/admin');
const register = require("./routes/register");
const login = require("./routes/login");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express()
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/auth',authRoutes);
app.use('/admin',adminRoutes);
app.use('/api',register);
app.use('/api',login);
app.get('/',(req,res)=>{return res.send("hi")})

app.listen(port, () => console.log(`app listening on port ${port}!`))