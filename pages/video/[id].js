
//import { getVideoData } from '../../utils/videos';
// import { readJsonFile } from '../../utils/videos';
import Link from 'next/link';
import { useRouter } from 'next/router'
 
// export async function getStaticPaths() {
//   const data = await readJsonFile();
//   return { props: { data } };
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// This gets called on every request
// similar to `getStaticProps()` but runs on server
// export async function getServerSideProps({ context }) {
//   console.log(`context`, context)
//   // LATER: Fetch data from firebase
//   const res = await fetch(`https://mocki.io/v1/361f2b21-2756-41ac-ae6b-d6e994bf43ed`)
//   const allData = await res.json()

//   // get all videos data
//   //const allData = await readJsonFile();
//   // get single video data
//   // const { params } = context;
//   const { id } = context.query;
//   const data = allData.find((video) => video.id === id);

//   // LATER: convert it to a function
//   // const videoData = await getVideoData(id);
//   // const data = await null;
  
//   // Pass data to the page component as props
//   return { props: { data } }
// }

  
export default function Video() {
//export default function Video({ data }) {

  const router = useRouter()
  const { id } = router.query

  // const listItems = data.map((item) =>
  //   <li key={item.id}>{item.author}</li>
  // );

  return (
    <div>
      <Link href='/video'>Back to Videos List</Link>
      <h1> Details about video {id} </h1>
    </div>
  )

  // return (
  //   <ul>
  //     <li>{data.id}</li>
  //     <li>{data.author}</li>
  //     <li>{data.duration}</li>
  //     <li>{data.views}</li>
  //   </ul>
  // );
}