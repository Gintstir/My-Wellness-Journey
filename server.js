const path = require("path");
const express = require("express");
//sets up express-session and sequelize-store
const session = require("express-session");
//this sets up Handlebars.js functionality
const exphbs = require("express-handlebars");

//=====================================

const app = express();
const PORT = process.env.PORT || 3001;

//=====================================

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//turn on session storage
app.use(session(sess));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on Port: ${PORT}`));
});
