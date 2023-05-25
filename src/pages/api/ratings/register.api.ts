import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { rate, description, book_id, user_id } = req.body;

  await prisma.rating.create({
    data: {
      rate,
      description,
      book_id,
      user_id,
    },
  });

  return res.status(201).end();
}
