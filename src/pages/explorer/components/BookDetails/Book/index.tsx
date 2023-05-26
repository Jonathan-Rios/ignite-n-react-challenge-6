import { StarRate } from "@/components/StarRate";
import { Container, Content, IsReadBadge } from "./styles";

import Image from "next/image";
import { BookOpen, BookmarkSimple } from "phosphor-react";

import { ICategory } from "@/@types/models";
import { useExplorer } from "@/hooks/Explorer";
import { queryClient } from "@/lib/react-query";

export function Book() {
  const { selectedBook } = useExplorer();
  const categories = queryClient.getQueryData<ICategory[]>(["getCategories"]);

  function getCategoriesName() {
    if (!selectedBook?.categories) {
      return [];
    }

    const categoriesName = selectedBook?.categories.map((category) => {
      const categoryData = categories?.find(
        (item) => item.id === category.categoryId
      );

      return categoryData?.name;
    });

    return categoriesName.length ? categoriesName.join(", ") : "Indefinida";
  }

  return (
    <Container>
      <section>
        <Image
          src={selectedBook?.cover_url || ""}
          alt={selectedBook?.name || ""}
          width={110}
          height={160}
        />
        <Content>
          <div>
            <h2>{selectedBook?.name || ""}</h2>
            <h3>{selectedBook?.author || ""}</h3>
          </div>

          <footer>
            <span className="starRate">
              <StarRate starRate={4} />
            </span>
            <p>3 avaliações</p>
          </footer>
        </Content>
      </section>

      <footer>
        <div className="book-details-footer-item">
          <BookmarkSimple />
          <div>
            <p>Categoria</p>

            <h3>
              <pre>{getCategoriesName()}</pre>
            </h3>
          </div>
        </div>

        <div className="book-details-footer-item">
          <BookOpen />
          <div>
            <p>Páginas</p>
            <h3>{selectedBook?.total_pages || ""}</h3>
          </div>
        </div>
      </footer>
    </Container>
  );
}
