import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query"], // Vai mostrar no terminal as querys que o prisma faz
});
