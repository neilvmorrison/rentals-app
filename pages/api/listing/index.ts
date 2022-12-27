import { Listing } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { createListing } from "../../../services/listings";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Listing>
) {
  if (req.method === "POST") {
    return;
  }
  if (req.method === "GET") {
    return;
  }
}
