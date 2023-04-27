import VideosListTable from 'components/VideosListTable';
import Link from 'next/link';

export async function getServerSideProps() {
  // data is an array of objects
  // [
    // {
    //   "filename": "LABORATORIES-SCIENCE_12.mp4",
    //   "size": 33157948,
    //   "videoUrl": "/Users/jais_mukesh/Projects/js-projects/thea_backend/uploads/LABORATORIES-SCIENCE_12.mp4",
    //   "thumbnailUrl": "",
    //   "duration": 180,
    //   "recordedOn": "May 9, 2011",
    //   "recordedBy": "Christian Meisel",
    //   "reviewStatus": [
    //     "uploaded"
    //   ],
    //   "events": [],
    //   "uploadedOn": "May 10, 2011",
    //   "uploadedBy": "Gadi Miron",
    //   "__v": 0
    // },
  //   ...
  // ]
  const response = await fetch(`http://localhost:5000/api/videos`);
  const data = await response.json();

  return { props: {  videos: data } };
}

export default function VideosList({ videos }) {
  return (
    <div>
      <h1 class="mt-10 ml-10">All Videos</h1>
      <VideosListTable videos={videos} />
      {/* <div class="mt-20 ml-5">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-20 ml-10">
          Analyze with AI
        </button>

        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Share with Doctor
        </button>
      </div> */}
    </div>
  );
}