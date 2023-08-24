import express from "express";
import dotenv from "dotenv"
import conn from "./db.js"
import pageRoute from "./routes/pageRoutes.js"
import photoRoute from "./routes/photoRoute.js"

dotenv.config();

// connection to the db
conn();

const app = express();
const port = 3000;

// EJS TEMPLETE ENGINE
app.set("view engine", 'ejs');

// STATIC FILES MIDDLEWARE
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.render('index');
// })

// app.get('/about', (req, res) => {
//     res.render('about');
// })


// ROUTES
app.use("/", pageRoute);
app.use('/photos', photoRoute);

app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
})