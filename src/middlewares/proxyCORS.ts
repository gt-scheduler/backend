import { NextFunction, Request, Response } from "express";

/**
 * Attach a CORS header to the header sent as a response from this server
 */
export const attachCORSResponse = (req: Request, res: Response, next: NextFunction): void => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}