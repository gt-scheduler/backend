import { Request, Response } from "express";

import Airtable from "airtable";
import AirtableError from "airtable/lib/airtable_error";

import config from "../config";

const baseName = config.AT_TABLE_BASE ?? "";
const base = new Airtable({ apiKey: config.AT_API_KEY }).base(baseName);

export const AirTablePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  base("Feedback").create(
    [
      {
        fields: {
          Submitted: new Date(),
          Rating: req.body.rating,
          Feedback: req.body.feedback,
        },
      },
    ],
    (err: AirtableError) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ message: err });
      }
      return res.send({ message: "Created New Record" });
    }
  );
};
