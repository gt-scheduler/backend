import { Router } from "express";

import { ClassSectionProxy } from "../controllers/classSection";
import { AirTablePost } from "../controllers/airTable";

import { formValidation } from "../middlewares/formValidation";

export const index = Router();

index.route("/proxy/class_section").get(ClassSectionProxy);

index.route("/feedback").post(formValidation, AirTablePost);
