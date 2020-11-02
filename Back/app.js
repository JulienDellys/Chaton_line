const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
//const ent = require('ent'); // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
  console.log("New client coconecté");

  socket.on('utilisateurConnecter', (pseudo) => {
    //pseudo = ent.encode(pseudo);
    socket.pseudo = pseudo;
    socket.broadcast.emit('utilisateurAccuellir', pseudo);
    console.log(pseudo);
  });

  socket.on('sendMessage', (message) => {
    //pseudo = ent.encode(pseudo);
    socket.message = message;
    socket.broadcast.emit('updateChat', message);
    console.log(message);
  });

});

server.listen(port, () => console.log(`Écoute on port ${port}`));