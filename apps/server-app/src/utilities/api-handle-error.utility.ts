import { CustomError } from "@repo/app-modules";
import { Response } from "express";

export function apiHandleError(error: unknown, res: Response) {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: "Internal server error" });
}
