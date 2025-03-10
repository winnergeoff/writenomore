import { PrismaClient } from '@prisma/client';

declare global {
  /* eslint no-var: 0 */
  var prisma: PrismaClient; // This must be a `var` and not a `let / const`
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
