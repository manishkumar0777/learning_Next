import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold
       text-center text-red-500 items-center 
       justify-center'
       >
        HomePage
      </h1>
      <Link href='/blog'>Blogs</Link>
      <Link href='/articles/breaking-news-121?lang=en'>Read in English</Link>
      <Link href='/articles/breaking-news-121?lang=es'>Read in Spanish</Link>
    </div>
  );
}
