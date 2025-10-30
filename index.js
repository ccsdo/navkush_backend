const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const path = require("path");

const formRoutes = require("./routes/formRoutes");
app.set("trust proxy", 1); // trust first proxy
app.use(bodyParser.json());

const allowed = [process.env.FRONTEND_URL, process.env.FRONTEND_URL2];
app.use((req, res, next) => {
  const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
  console.log(`[${new Date().toLocaleString("en-IN", { timeZone: 'Asia/Kolkata' })}] Request from IP: ${ip}, Origin: ${req.headers.origin || "undefined"}`);
  next();
});
 
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman or server-to-server)
      
      //if (!origin) return callback(null, true);

      if (allowed.indexOf(origin) !== -1) {
        //  Origin is allowed
        return callback(null, true);
      } else {
        //  Origin not allowed
        return callback(new Error("CORS origin not allowed"));
      }
    },
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
// app.use(cors())
app.use("/v1/v2/vz/api/forms",formRoutes)
// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "dist")));
// Catch-all route to serve index.html
// console.log(__dirname);
// app.get(/.*/, (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
});
