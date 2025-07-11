import BookItem from '@/components/book-item';
import style from './page.module.css';
import books from '@/mock/books.json';
import { BookData } from '@/types';

const url = process.env.NEXT_PUBLIC_API_SERVER_URL;

async function AllBooks() {
  const response = await fetch(`${url}/book`);

  if (!response.ok) {
    return <div>오류가 발생했습니다 ㅠㅠ</div>;
  }

  const allBooks: BookData[] = await response.json();

  console.log(allBooks);

  return (
    <div>
      {allBooks.map(book => {
        return <BookItem key={book.id} {...book} />;
      })}
    </div>
  );
}

async function RecoBooks() {
  const response = await fetch(`${url}/book/random`);

  if (!response.ok) {
    return <div>오류가 발생했습니다 ㅠㅠ</div>;
  }

  const recoBooks: BookData[] = await response.json();

  console.log(recoBooks);

  return (
    <div>
      {recoBooks.map(book => {
        return <BookItem key={book.id} {...book} />;
      })}
    </div>
  );
}

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
