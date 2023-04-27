import { useState } from "react";
import { formatTimeInput, seconds_to_HH_MM_SS, HH_MM_SS_to_seconds, convertToSeconds } from "helpers/formatDuration";

export default function CreateEpisode() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");

  const handleStartChange = (event) => {
    const formattedInput = formatTimeInput(event.target.value);
    setStart(formattedInput);
  };

  const handleEndChange = (event) => {
    const formattedInput = formatTimeInput(event.target.value);
    setEnd(formattedInput);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCreateEpisode = async (event) => {
    event.preventDefault();

    // Here you can use the values of start, end, and description to create a new episode
    // console.log("Start:", start);
    // console.log("End:", end);
    // console.log("Description:", description);

    const data = {
      "Start": start,
      "End": end,
      "Description": description
    }

    console.log(data)
    // const response = await fetch(`http://localhost:4000/videos`);

    const response = await fetch(`http://localhost:5000/api/v1/videos/1/mark-episode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const responseData = await response.json()

    // Handle response data here
    console.log(responseData)
  };

  return (
    <div class="flex flex-col space-y-4">
      <div class="flex space-x-4">
        <div class="w-full">
          <label class="text-lg">
            Start (hh:mm:ss):
            <input
              type="text"
              value={start}
              onChange={handleStartChange}
              class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>
        <div class="w-full">
          <label class="text-lg">
            End (hh:mm:ss):
            <input
              type="text"
              value={end}
              onChange={handleEndChange}
              class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>
      </div>
      <div>
        <label class="text-lg">
          Description:
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>
      <div>
        <button
          onClick={handleCreateEpisode}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Create Episode
        </button>
      </div>
    </div>
  );
}
