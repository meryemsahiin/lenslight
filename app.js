import express from "express";
import dotenv from "dotenv"
import conn from "./db.js"
import cookieParser from "cookie-parser"
import pageRoute from "./routes/pageRoutes.js"
import photoRoute from "./routes/photoRoute.js"
import userRoute from "./routes/userRoute.js"
import { checkUser } from "./middlewares/authMiddleware.js";

dotenv.config();

// connection to the db
conn();

const app = express();
const port = 3000;

// EJS TEMPLETE ENGINE
app.set("view engine", 'ejs');

// STATIC FILES MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.render('index');
// })

// app.get('/about', (req, res) => {
//     res.render('about');
// })


// ROUTES
app.use("*", checkUser);
app.use("/", pageRoute);
app.use('/photos', photoRoute);
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
})