// import { readJsonFile } from '../utils/videos';
import Link from 'next/link';

//export async function getServerSideProps( context ) {
  // data is an array of objects
  // [
  //   {
  //     author: 'Vlad',
  //     id: "1",
  //     isLive: true,
  //     ...
  //   },
  //   {
  //     ...
  //   }
  // ]
//   const data = await readJsonFile();
//   return { props: { data } };
// }

function VideosListPage({ id = 100 }) {
  return (
    // <ul>
    //   {data.map(({ id, author }) => (
    //     <li key={id}>
    //       {/* <Link href={`/video/${id}`}>{author}</Link> */}
    //       <Link href="/video/[id]" as={`/video/${id}`}>{author}</Link>
    //     </li>
    //   ))}
    // </ul>
    <div>
      <Link href="/">Back To Home</Link>
      <h1>Videos List Page</h1>
      <h3><Link href='/video/1'>Video 1</Link></h3>
      <h3><Link href='/video/2'>Video 2</Link></h3>
      <h3><Link href='/video/3'>Video 3</Link></h3>
      <h3><Link href={`/video/${id}`}>Video {id}</Link></h3>
    </div>
  );
}
  
export default VideosListPage