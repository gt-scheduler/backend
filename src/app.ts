import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as cors from "cors";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";

// Create Express server
export const app = express();

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

app.use('/static', express.static(path.join(__dirname, "../public")));

app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
