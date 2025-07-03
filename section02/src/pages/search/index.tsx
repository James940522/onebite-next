import SearchableLayout from '@/components/searchable-layout';
import { ReactNode, useEffect, useState } from 'react';
import BookItem from '@/components/book-item';
import fetchBooks from '@/lib/fetch-books';
import { BookData } from '@/types';
import { useRouter } from 'next/router';

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();

  const { q } = router.query;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
  };

  useEffect(() => {
    fetchSearchResult();
  }, [q]);

  return (
    <div>
      {books.map(book => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
