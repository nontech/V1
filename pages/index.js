import Link from 'next/link';

function HomePage({ data }) {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/videos">Videos List</Link>
    </div>
  );
}
  
export default HomePage