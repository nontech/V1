import Link from 'next/link';

function HomePage({ data }) {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/videos">Videos List</Link>
    </div>
  );
}
  
export default HomePage