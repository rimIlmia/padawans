// Imports
import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import router from "./router";

//import router from "./router"

// Load express modules

const server = server => {
  console.info("SETUP - Loading modules...");

  // Enable CORS
  server.use(cors());

  // Request body parser
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  // Request body cookie parser
  server.use(cookieParser());

  server.use(morgan("tiny"));

  // Initializing our routes
  router(server);
};

export default server;
