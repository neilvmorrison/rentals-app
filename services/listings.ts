import { prisma } from "../utils/prisma";

export async function getListingById(id: string): Promise<any> {
  return prisma.listing.findFirstOrThrow({ where: { id } });
}
