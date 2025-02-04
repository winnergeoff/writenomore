"use server";

import { auth } from "./authConfig";
import prisma from '../prisma';

export const setName = async (name: string) => {
  // Check if the user is authenticated
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const uuid: string = session.user.id;

  // Sanitize input
  const uuidRegExp: RegExp =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  if (typeof uuid !== "string" || !uuidRegExp.test(uuid)) {
    throw new Error("Invalid UUID");
  }
  name = name.trim();

  // Update the user's name in the database
  await prisma.$queryRaw`UPDATE users SET name = ${name} WHERE id = ${uuid}", [name, uuid])`;

  return true;
};