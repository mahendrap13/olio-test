import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import route from "./routes/register.route.js";

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());
app.use("/uploads",express.static("./uploads"));

var corsOptions = {
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(route);

async function main() {
  const uri = process.env.DATABASE;
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch(() => {
      console.log("Could not connect to MongoDB!");
    });
}
main();
