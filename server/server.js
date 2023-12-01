if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const userroutes = require("./routes/UserRoutes");
const pacroutes = require("./routes/PACRoutes")
const mferoutes = require("./routes/MFERoutes")
const requestroutes = require("./routes/RequestRoutes")
app.use("/api/user/", userroutes);
app.use("/api/pac/", pacroutes)
app.use("/api/mfe/", mferoutes)
app.use("/api/request/", requestroutes)

const server = require("http").createServer(app);
const MYPORT = process.env.PORT || 6100;

const DB_URL = process.env.MONGO_URL;
mongoose
  .connect(DB_URL)
  .then(() => console.log("Mongoup"))
  .catch((e) => console.log(e));

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

io.on("connection", (socket) => {

  socket.on("join-one", async(room) => {
      console.log("Hi")
      await socket.join(room)
  })

  socket.on("send-room", async (room, message, role) => {

      const dateob = new Date();
      const reqt = `${dateob.getHours().toString().padStart(2, '0')}:${dateob.getMinutes().toString().padStart(2, '0')}:${dateob.getSeconds().toString().padStart(2, '0')}`;
      const reqd = `${dateob.getDate().toString().padStart(2, '0')}/${(dateob.getMonth() + 1).toString().padStart(2, '0')}/${dateob.getFullYear()}`;
      console.log(message, role, reqd, reqt)
      await io.to(room).emit("receive-room", message, role, reqd, reqt)

  })

})

app.get("/", (req, res) => {
  res.send("Welcome to home page sir");
});

server.listen(MYPORT, () => {
  console.log(`Ready to serve you master on ${MYPORT}`);
});
