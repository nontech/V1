import VideosListTable from 'components/VideosListTable';
import Link from 'next/link';

export async function getServerSideProps() {
  // data is an array of objects
    // [
    //   {
    //     _id: new ObjectId("6450620edbf68b6f07bc801c"),
    //     length: 33157948,
    //     chunkSize: 261120,
    //     uploadDate: 2023-05-02T01:06:23.999Z,
    //     filename: 'LABORATORIES-SCIENCE_12',
    //     metadata: {
    //       thumbnailUrl: '',
    //       description: '',
    //       duration: 180,
    //       recordedOn: 'May 9, 2011',
    //       recordedBy: 'Christian Meisel',
    //       reviewStatus: [Array],
    //       events: [],
    //       uploadedBy: 'Gadi Miron'
    //     }
    //   }, ...
    // ]
  console.log('inside getServerSideProps VideosList Table /api/videos', process.env.NEXT_PUBLIC_BACKEND_DOMAIN)

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/videos`);
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