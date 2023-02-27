const express = require("express");
const app = express();

const DB = require("./database");

const shortenerRouter = require("./routes/shortenerRoutes");

DB();

app.use(express.json());
app.use("/api/shortener", shortenerRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})