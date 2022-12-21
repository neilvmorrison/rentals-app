import { Profile } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { findProfileByUserUid } from "../../../services/profiles.service";

type Data = {
  profile: Profile | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uid } = req.query;
  const selfProfile = await findProfileByUserUid(uid as string);
  res.status(200).json({ profile: selfProfile });
}
