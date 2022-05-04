const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const usersRoutes = require('./routes/userRoutes')
server.use('/users', usersRoutes);




server.listen(4004, () => console.log("Server started"))



//server.get("/", (req, res) => res.send("Welcome to our quiz"));

module.exports = server;





// const server = express();
// server.use(cors());
// server.use(express.json());
// const usersRoutes = require('./routes/userRoutes')

// server.use('/Score', usersRoutes);

// server.get("/", (req, res) => res.send({ message: "Welcome to our quiz" }));

// module.exports = server;
