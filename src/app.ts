import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as cors from "cors";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";
import { attachCORSResponse } from './middlewares/proxyCORS';

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();

/**
 * @TODO Add more details such such as whitelists, methods options, etc
 */
app.use(cors());

// Express configuration
app.set("port", process.env.PORT || 3030);

app.use(logger("dev"));

// No Template Engine is Defined
// app.use(express.static(path.join(__dirname, "../public")));

// Attach CORS response
app.use(attachCORSResponse);

app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
