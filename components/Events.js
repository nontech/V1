export default function Events({eventsArray}) {

  const events = [];

  eventsArray.map((item, index) => {
    if (index == 0 && Number.isInteger(item)) events.push(<span key={index} class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800 mr-2 mb-2">{item}</span>);
    if (index == 1 && Number.isInteger(item)) events.push(<span key={index} class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 mr-2 mb-2">{item}</span>);
    if (index == 2 && Number.isInteger(item)) events.push(<span key={index} class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800 mr-2 mb-2">{item}</span>);

    return true;
  });

  return <div class="flex flex-wrap">{events}</div>;
}