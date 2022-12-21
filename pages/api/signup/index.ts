import { Profile } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { HttpError, IHttpError } from "../../../errors/HttpError";
import { createUserProfile } from "../../../services/profiles.service";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile | HttpError | string>
) {
  if (req.method === "POST") {
    const { userId, email } = JSON.parse(req.body);
    try {
      const result = await createUserProfile(userId, email);
      res.status(200).json(result);
    } catch (err) {
      let status = 500;
      let message = "Internal Server Error";
      if (err instanceof HttpError) {
        return res.status(err.status).send(err);
      }
      return res.status(status).send(message);
    }
  }
}
