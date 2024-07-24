import jwt from "jsonwebtoken";
import { errorHandler } from "../error/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return next(errorHandler(401, "Unauthorized"));
  
  const jwtSecret = process.env.JWT_SECRET;
  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};
