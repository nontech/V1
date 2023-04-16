import Link from 'next/link';

export async function getServerSideProps(context) {
  let { id } = context.params;
  const response = await fetch(`http://localhost:4000/videos/${id}`);
  // data is an object
  // {
  //   "id": "1",
  //   "title": "Big Buck Bunny",
  //   "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
  //   "duration": "8:18",
  //   "uploadTime": "May 9, 2011",
  //   "views": "24,969,123",
  //   "author": "Vlc Media Player",
  //   "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  // }
  const data = await response.json();

  // if id is not found, return 404
  if (!data.id) {
    return {
      notFound: true
    }
  }

  return { props: { video: data } }
}
  
export default function Video({ video }) {

  return (
    <div>
      <Link href='/videos'>Back to Videos List</Link>
      <p>{video.title}</p>
      <p>{video.author}</p>
    </div>
  )
}