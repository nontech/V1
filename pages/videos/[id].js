import Link from 'next/link';
import VideoPlayer from 'components/VideoPlayer';

export async function getServerSideProps(context) {
  return { props: { videoId: context.params.id } }
}
  
export default function Video({ videoId }) {

  return (
    <div>
      <Link href="/videos" class="text-gray-700 text-sm font-medium flex justify-center mt-10">Back</Link>
      <VideoPlayer videoId={ videoId } />
    </div>
  )
}