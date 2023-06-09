import Link from 'next/link';
import StatusArrayToTags from 'components/ReviewStatusTags';
import Events from 'components/Events';

export default function VideosListTable({ videos, videosFromDB }) {
  return (
    <div class="p-10">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Recorded On
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Duration
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Uploaded On
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Review Status
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Events
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {videos.map((video) => {
          const { _id, filename, recordedOn, duration, uploadedOn, reviewStatus, events } = video;
          return (
            <tr key={_id}>
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <Link href="/videos/[id]" as={`/videos/${_id}`}>{filename}</Link>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {recordedOn}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {duration}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {uploadedOn}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <StatusArrayToTags statusArray={ reviewStatus } />
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <Events eventsArray= { events } />
              </td>
            </tr>
        )})}
      </tbody>
    </table>
   </div>
  )
}