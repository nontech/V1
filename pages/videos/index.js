import VideosListTable from 'components/VideosListTable';
import Link from 'next/link';

export async function getServerSideProps() {
  // data is served from a fake API using json-server locally
  // run -> npm run serve-json
  // data available at -> localhost:4000/videos
  // data is an array of objects
  // [
  //  {
  //    "id": 1,
  //    "title": "Video 1",
  //    "recorded_on": "2022-06-15",
  //    "duration": "00:45:12",
  //    "uploaded_on": "2022-06-16",
  //    "review_status": ["uploaded", "ai", "doctor_shared", "doctor_reviewed"],
  //    "events": [6, 8, 10],
  //    "author": "John Doe",
  //    "uploaded_by": "Jane Smith",
  //    "video_url": "https://example.com/videos/video1"
  //  },
  //   ...
  // ]
  const response = await fetch(`http://localhost:4000/videos`);

  const data = await response.json();

  return { props: {  videos: data } };
}

export default function VideosList({ videos }) {
  return (
    <div>
      <h1 class="mt-10 ml-10">All Videos</h1>
      <VideosListTable videos={videos} />
      <div class="mt-20 ml-5">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-20 ml-10">
          Analyze with AI
        </button>

        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Share with Doctor
        </button>
      </div>
    </div>
  );
}