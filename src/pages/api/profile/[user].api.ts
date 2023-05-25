import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { user } = req.query;

  const profile = await prisma.user.findUnique({
    where: {
      id: user as string,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },

        orderBy: {
          created_at: "desc",
        },
      },
    },
  });

  if (!profile) {
    return res.status(404).end();
  }

  const categories = profile.ratings.reduce((acc, rating) => {
    const category = rating.book.categories[0].category.name;

    if (!acc[category]) {
      acc[category] = 1;
    } else {
      acc[category]++;
    }

    return acc;
  }, {} as Record<string, number>);

  const maxCount = Math.max(...Object.values(categories));
  const topCategories = Object.keys(categories).filter(
    (category) => categories[category] === maxCount
  );

  const formattedProfile = {
    ...profile,
    pagesRead: profile.ratings.reduce((acc, rating) => {
      return acc + rating.book.total_pages;
    }, 0),
    booksRead: profile.ratings.length,
    booksRated: profile.ratings.length,
    mostReadCategory: topCategories,
  };

  return res.status(200).json(formattedProfile);
}
