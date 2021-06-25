import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "f6e5fa118bcbdef6f06a6273aebb0ac3"
    ) as IPayLoad;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
