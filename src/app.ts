import express from "express";
import logger from "morgan";
import * as path from "path";
import cors from "cors";
import { errors } from "celebrate";

// Middlewares
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";

// Create Express server
export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * @TODO Add more details such such as whitelists, methods options, etc
 *
 * All this middleware is doing is the following so browser can match that
 * origin (*) and accept the response
 *      res.header('Access-Control-Allow-Origin', '*');
 *      next();
 */
app.use(cors());

// Express configuration
app.set("port", process.env.PORT || 3030);
app.use(logger("dev"));
app.disable("etag");

app.use("/", index);
app.use("/", express.static(path.join(__dirname, "../public")));

app.use(errors());
app.use(errorNotFoundHandler);
app.use(errorHandler);
