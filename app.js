const express = require("express");
const path = require("path");
const petsController = require("./controllers/petsController")

const app = express();
const PORT = process.env.PORT || 4000

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(petsController)

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
)