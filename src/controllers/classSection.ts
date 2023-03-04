import { Request, Response } from "express";
import axios from "axios";

/**
 * Proxy Controller to proxy class section request to Oscar
 */
export const ClassSectionProxy = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { term, crn } = req.query;
  if (term == null || crn == null) {
    return res
      .status(400)
      .send({ message: "missing 'term' and 'crn' query parameters " });
  }

  try {
    const url = `https://registration.banner.gatech.edu/StudentRegistrationSsb/ssb/searchResults/getEnrollmentInfo?term=${term}&courseReferenceNumber=${crn}`;
    const upstreamRes = await axios.get(url);
    res.setHeader("Last-Modified", new Date().toUTCString());
    return res.status(upstreamRes.status).send(upstreamRes.data);
  } catch (err) {
    return res.status(502).send({ message: err.message });
  }
};
