const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const url = `mongodb://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}?authSource=admin`;

mongoose.set("strictQuery", true);
mongoose
	.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => {
		console.log("Database connected");
	})
	.catch((err) => {
		console.log("Error connecting to the database", err);
	});

app.get('/', (req, res)=>{
    console.log(req.body)
    res.send('Hello World')
})

const server = app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
