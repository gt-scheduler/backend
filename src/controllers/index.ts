import { Request, Response } from "express";

/**
 * GET 
 */
export const index = async (_: Request, res: Response): Promise<void> => {
    // TODO remove once adding real API routes
    res.json({ status: "online", georgia: "tech" })
};



