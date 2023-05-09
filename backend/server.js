const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session');
const sequelize = require('./config/connection.js');
const blogRoutes = require('./controllers/api/blogRoutes.js');
const userRoutes = require('./controllers/api/userRoutes.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(routes);

app.use(express.static(path.join(__dirname, '../portfolio/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../portfolio/build/index.html'))
});

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
})