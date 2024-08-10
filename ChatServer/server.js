const express = require("express");
const app = express();
const socketIo = require("socket.io");
const http = require("http");
const cors = require("cors");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./User.js");

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("Device connected");

  socket.on("join", ({ name, roomNumber }, callback) => {
    roomNumber = Number(roomNumber);
    const { error, user } = addUser({ id: socket.id, name, roomNumber});

    if (error) {
      if (typeof callback === "function") {
        return callback(error);
      }
    }

    // Admin generated message
    socket.emit("message", {
      user: "admin",
      text: `${user.name} welcome to room ${roomNumber}`,
    });
    socket.broadcast.to(user.roomNumber).emit("message", {
      user: "admin",
      text: `${user.name} has joined the chat`,
    });

    socket.join(user.roomNumber);

    //to know which user is in a room
    io.to(user.roomNumber).emit("roomData" , {room:user.roomNumber , users:getUsersInRoom(user.roomNumber)});

    if (typeof callback === "function") {
      callback();
    } else {
      console.warn("Callback is not provided or not a function for 'join'");
    }
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    if (user) {
      // To broadcast message to all clients connected to a specific room
      io.to(user.roomNumber).emit("message", { user: user.name, text: message });

      io.to(user.roomNumber).emit("roomData" , {room:user.roomNumber , users:getUsersInRoom(user.roomNumber)});


      if (typeof callback === "function") {
        callback();
      } else {
        console.warn("Callback is not provided or not a function for 'sendMessage'");
      }
    } else {
      console.error("User not found for socket ID", socket.id);
    }
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.roomNumber).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
    }
    console.log("Device disconnected");
  });
});

const port = 5000;

app.get("/" , (req,res) => {
 res.send("Chat Server listening")
})

server.listen(port, () => {
  console.log(`Chat server listening on port ${port}`);
});


