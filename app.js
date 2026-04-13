const express = require("express");
const path = require("path");

const sequelize = require("./models/index");
const homeRouter = require("./routes/homeRouter");
const courseRouter = require("./routes/courseRouter");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

app.use("/courses", courseRouter);
app.use("/", homeRouter);

app.use((req, res) => {
    res.status(404).send("Сторінку не знайдено");
});

sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log("Сервер освітньої платформи запущено: http://localhost:3000");
        });
    })
    .catch(err => console.log(err));