"use server";

import prisma from '../prisma';
import { auth } from "./authConfig";

// Get the role from the postgres database based on the UUID in the users table
export const getUserRole = async () => {
  const session = await auth();
  if (session) {
    const uuid = session?.user?.id;

    // Sanitize input
    const uuidRegExp: RegExp =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    if (typeof uuid !== "string" || !uuidRegExp.test(uuid)) {
      throw new Error("Invalid UUID");
    }

    const { rows } = await prisma.$queryRaw`SELECT role FROM users WHERE id = ${uuid}`;
    return rows[0].role;
  }
};