import { Listing } from ".prisma/client";
import { prisma } from "../utils/prisma";

export async function getListingById(id: string): Promise<any> {
  return prisma.listing.findFirstOrThrow({ where: { id } });
}

export async function createListing(payload: Listing): Promise<Listing> {
  return prisma.listing.create({ data: payload });
}
