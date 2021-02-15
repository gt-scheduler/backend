import { Request, Response } from 'express';
import axios from 'axios';

/**
 * Proxy Controller to proxy class section request to Oscar
 */
export const ClassSectionProxy = async (req: Request, res: Response): Promise<Response> => {
    const term = req.query.term_in;
    const crn = req.query.crn_in;
    return axios.get(`https://oscar.gatech.edu/pls/bprod/bwckschd.p_disp_detail_sched?term_in=${term}&crn_in=${crn}`)
        .then((response) => res.send(response.data))
        .catch((err) => res.status(400).send({ message: err.message }));
};