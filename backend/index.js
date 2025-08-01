const express=require("express")
const app = express()
require("dotenv").config()
require("./connections/conn")
const user=require("./routes/user")
const book=require("./routes/book")
const favourite=require("./routes/favourite")
const cart=require("./routes/cart")
const order=require("./routes/order")
const home=require("./routes/home")
const payment = require("./routes/payment");
const author = require("./routes/author");
const cors=require("cors")
const path = require('path');

app.use(cors(
  {
  origin: [
    'http://localhost:5173', // for local development
    'https://hamro-book-jnbfwd5ok-paras-mahatos-projects.vercel.app', // production
    'https://hamro-book.vercel.app' // your custom domain
  ]}
));

app.use(express.json());
app.use(express.urlencoded({extended: true }))


const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";



app.use("/user",user)
app.use("/book",book)
app.use("/favourite",favourite)
app.use("/cart",cart)
app.use("/order",order)
app.use("/home",home )
app.use("/payment", payment);
app.use("/author", author);


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on: http://${HOST}:${PORT}`);
});
