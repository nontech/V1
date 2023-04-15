import Link from 'next/link';

function HomePage({ data }) {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/video">Videos List</Link>
    </div>
  );
}
  
export default HomePage