import type { NextApiRequest, NextApiResponse } from "next";
import { findSelfProfileByUserUid } from "../../../services/profiles.service";

type Data = {
  profile: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uid } = req.query;
  const selfProfile = await findSelfProfileByUserUid(uid as string);
  res.status(200).json({ profile: selfProfile });
}
