
export default function StatusArrayToTags({statusArray}) {

  const HtmlTags = [];

  // statusArray.map((item, index) => {
  //   if (item === 'uploaded') HtmlTags.push(<span key={index} class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800 mr-2 mb-2">uploaded</span>);
  //   if (item === 'ai') HtmlTags.push(<span key={index} class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 mr-2 mb-2">ai</span>);
  //   if (item === 'doctor_shared') HtmlTags.push(<span key={index} class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800 mr-2 mb-2">doctor_shared</span>);
  //   if (item === 'doctor_reviewed') HtmlTags.push(<span key={index} class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800 mr-2 mb-2">doctor_reviewed</span>);

  //   return true;
  // });

  return <div class="flex flex-wrap">{HtmlTags}</div>;
}