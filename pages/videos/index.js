import Video from '../../components/video';
import Link from 'next/link';

// runs only on the server-side
export async function getStaticProps() {
  // data is served from a fake API using json-server locally
  // run -> npm run serve-json
  // data available at -> localhost:4000/videos
  // data is an array of objects
  // [
  //   {
  //     "id": "1",
  //     "title": "Big Buck Bunny",
  //     "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
  //     "duration": "8:18",
  //     "uploadTime": "May 9, 2011",
  //     "views": "24,969,123",
  //     "author": "Vlc Media Player",
  //     "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  //   },
  //   ...
  // ]
  const response = await fetch(`http://localhost:4000/videos`);

  const data = await response.json();

  return { props: {  videos: data  }};
}

export default function VideosList({ videos }) {
  return (
    <div>
      <Link href="/">Back To Home</Link>
      <h1>List of Videos</h1>
      <ul>
       {videos.map((video) => (
          <li key={video.id}>
            <Video videoData={video} />
          </li>
        ))}
      </ul>
    </div>
  );
}