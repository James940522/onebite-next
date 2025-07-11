import BookItem from '@/components/book-item';
import { BookData } from '@/types';

const url = process.env.NEXT_PUBLIC_API_SERVER_URL;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  const response = await fetch(`${url}/book/search?q=${q}`);

  if (!response.ok) {
    return <div>오류가 발생했습니당 ㅠㅠ</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map(book => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
