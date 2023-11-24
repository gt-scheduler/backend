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
    const enrollmentInfoUrl = `https://registration.banner.gatech.edu/StudentRegistrationSsb/ssb/searchResults/getEnrollmentInfo?term=${term}&courseReferenceNumber=${crn}`;
    const enrollmentInfoRes = await axios.get(enrollmentInfoUrl);
    const restrictionsUrl = `https://registration.banner.gatech.edu/StudentRegistrationSsb/ssb/searchResults/getRestrictions?term=${term}&courseReferenceNumber=${crn}`;
    const restrictionsRes = await axios.get(restrictionsUrl);
    const html = `
      <html>
        <head>
          <title>Class Section</title>
        </head>
        <body>
          ${enrollmentInfoRes.data}
          <hr/>
          ${restrictionsRes.data}
        </body>
      </html>
    `;
    res.setHeader("Last-Modified", new Date().toUTCString());
    return res.status(enrollmentInfoRes.status).send(html);
  } catch (err) {
    return res.status(502).send({ message: err.message });
  }
};
