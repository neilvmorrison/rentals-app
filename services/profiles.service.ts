import { Profile } from ".prisma/client";
import { HttpError } from "../errors/HttpError";
import { prisma } from "../utils/prisma";

export async function findSelfProfileByUserUid(
  uid: string
): Promise<Profile | null> {
  return prisma.profile.findFirst({ where: { userId: uid } });
}

export async function findProfileByUserUid(
  uid: string
): Promise<Profile | null> {
  return prisma.profile.findFirst({
    where: { userId: uid },
    include: { contact: true },
  });
}

export async function createUserProfile(
  uid: string,
  email: string
): Promise<Profile> {
  const userProfile = await findProfileByUserUid(uid);
  if (userProfile) throw new HttpError(409, "Entity already exists");
  const profile = await prisma.profile.create({
    data: { userId: uid, contact: { create: { email } } },
    include: {
      contact: true,
    },
  });
  return profile;
}
