import Link from 'next/link';
import VideoPlayer from 'components/VideoPlayer';

export async function getServerSideProps(context) {
  let { id } = context.params;
  const response = await fetch(`http://localhost:5000/api/videos/${id}/metadata`);
  // data is an object
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
  // }
  const data = await response.json();

  // if _id is not found, return 404
  if (!data._id) {
    return {
      notFound: true
    }
  }

  return { props: { video: data } }
}
  
export default function Video({ video }) {

  return (
    <div>
      <Link href="/videos" class="text-gray-700 text-sm font-medium flex justify-center mt-10">Back</Link>
      <VideoPlayer video={ video } />
    </div>
  )
}