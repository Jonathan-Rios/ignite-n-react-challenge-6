import { Content, HeaderContainer, Principal } from "./styles";

import { Book } from "./components/Book";

import { Header } from "@/components/Header";
import { Binoculars } from "phosphor-react";
import { MainBody } from "@/components/MainBody";
import { InputText } from "@/components/InputText";
import { Category } from "./components/Category";
import { BookDetails } from "./components/BookDetails";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { IBook, ICategory } from "@/@types/models";
import { useState } from "react";
import { useExplorer } from "@/hooks/Explorer";
import { useSession } from "next-auth/react";

export interface BookWithAverageRating extends IBook {
  averageRating: number;
  isRead: boolean;
}

export default function Profile() {
  const { data: session } = useSession();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [isBookDetailsOpen, setIsBookDetailsOpen] = useState<boolean>(false);
  const { selectedBook, setSelectedBook } = useExplorer();

  const { data: books } = useQuery<BookWithAverageRating[]>(
    ["getBooks"],
    async () => {
      const { data } = await api.get<BookWithAverageRating[]>(
        `/books?user=${session?.user?.id || ""}`
      );

      return data;
    }
  );

  const { data: categories } = useQuery<ICategory[]>(
    ["getCategories"],
    async () => {
      const { data } = await api.get<ICategory[]>("/categories");

      return data;
    }
  );

  function handleSelectCategory(id: string) {
    const alreadySelected = selectedCategory.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedCategory.filter((item) => item !== id);

      setSelectedCategory(filteredItems);
    } else {
      setSelectedCategory([...selectedCategory, id]);
    }
  }

  function filterBooks() {
    if (!selectedCategory.length && search === "") {
      return books;
    }

    let filteredBooks = books;

    if (search.length) {
      filteredBooks = filteredBooks?.filter((book) => {
        return (
          book.name.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    if (selectedCategory.length) {
      filteredBooks = filteredBooks?.filter((book) => {
        const bookCategories = book.categories.map(
          (category) => category.categoryId
        );

        return selectedCategory.every((category) =>
          bookCategories.includes(category)
        );
      });
    }

    return filteredBooks;
  }

  function handleSelectBook(book: IBook) {
    setIsBookDetailsOpen(true);
    setSelectedBook(book);
  }

  function handleCloseBookDetails() {
    setIsBookDetailsOpen(false);
    setSelectedBook(undefined);
  }

  return (
    <MainBody>
      <HeaderContainer>
        <Header title="Explorar" icon={<Binoculars />} />
        <InputText
          className="searchField"
          placeholder="Buscar livro ou autor"
          onChange={(e) => setSearch(e.target.value)}
        />
      </HeaderContainer>

      <Content>
        <header>
          {categories?.map((category) => (
            <Category
              key={category.id}
              name={category.name}
              active={selectedCategory.includes(category.id)}
              onClick={() => handleSelectCategory(category.id)}
            />
          ))}
        </header>

        <Principal>
          {!!filterBooks()?.length ? (
            filterBooks()?.map((book) => (
              <>
                <Book
                  key={book.id}
                  book={book}
                  onClick={() => handleSelectBook(book)}
                  isRead={book.isRead}
                />
              </>
            ))
          ) : (
            <h2>Nenhum livro encontrado</h2>
          )}
        </Principal>
      </Content>

      {isBookDetailsOpen && selectedBook && (
        <BookDetails
          isOpen={isBookDetailsOpen}
          onClose={handleCloseBookDetails}
        />
      )}
    </MainBody>
  );
}
