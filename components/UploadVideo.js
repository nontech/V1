import React from 'react';
import { useState } from 'react';

export default function UploadVideo() {
  const [response, setResponse] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('video', selectedFile);

    const response = await fetch('http://localhost:5000/api/upload-video', {
      method: 'POST',
      body: formData
    });

    const responseData = await response.json();
    setResponse(responseData.message);
  };

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="video-upload">Select a video to upload</label>
      <input
        type="file"
        name="video"
        id="video-upload"
        accept="video/*"
        onChange={handleFileInputChange}
      />
      {/* <button type="submit">Upload</button> */}
      <div class="flex">
        <button type="submit" disabled={!selectedFile} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center m-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
          Upload
        </button>
      </div>
      {response && <p>{response}</p>}
    </form>
  );
}