import { Router } from "express";
import * as controller from "../controllers/index";
import { ClassSectionProxy } from '../controllers/classSection';

export const index = Router();

index.get("/", controller.index);

index
  .route('/proxy/class_section')
  .get(ClassSectionProxy);


