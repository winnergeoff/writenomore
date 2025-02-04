"use server";

import prisma from '../prisma';
export const clearStaleTokens = async () => {
  try {
    await prisma.$executeRaw`DELETE FROM VerificationToken WHERE expires < NOW();`;
  } catch (error) {
    throw error;
  }
};