import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import ApiError from "../exeptions/api-error";
import UserError from "../exeptions/user-error";
import { logger } from "../utils/logger";

export const errorMiddleware: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof ApiError || err instanceof UserError) {
    res.status(err.status).json({ message: err.message, errors: err.errors });
  } else {
    res.status(500).json({ message: err.message ?? "Unforeseeable error" });
  }
  next();
};
