import { Router } from "express";
import { ClassSectionProxy } from '../controllers/classSection';

export const index = Router();

index
  .route('/proxy/class_section')
  .get(ClassSectionProxy);


