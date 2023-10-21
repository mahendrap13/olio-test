import express from "express";
import {
  addRegister,
  getRegister,
} from "../controllers/register.controller.js";
const route = express.Router();

route.post("/add-userdata", addRegister);
route.get("/get-userdata", getRegister);

export default route;
