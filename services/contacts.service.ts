import { Contact } from ".prisma/client";
import { prisma } from "../utils/prisma";

export function updateContact(contactId: string): Promise<Contact | null> {
  return Promise.resolve(null);
}
