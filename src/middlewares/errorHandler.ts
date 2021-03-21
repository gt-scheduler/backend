import { NextFunction, Request, Response } from "express";
import createError from "http-errors";

declare type WebError = Error & { status?: number };
export const errorHandler = (
  err: WebError,
  req: Request,
  res: Response
): void => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message });
};

export const errorNotFoundHandler = (
  _r1: Request,
  _r2: Response,
  next: NextFunction
): void => {
  next(createError(404));
};
