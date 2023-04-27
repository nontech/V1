import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import clsx from 'clsx';

// "clips": [
//   {
//     "id": "clip1",
//     "start": 5,
//     "end": 10,
//     "created_by": "user",
//     "created_at": "2021-06-15",
//     "description": "This is a clip",
//     "steps": ["ai", "doctor"]
//   },
//   ...
// ]
const clips = [
  { start: 5, end: 10 },
  { start: 25, end: 30 },
  { start: 45, end: 50 },
  { start: 65, end: 70 },
];

export default function VideoPlayer() {
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  const handleProgress = (state) => {
    if (!isNaN(state.playedSeconds)) {
      setPlayed(state.playedSeconds);
    }
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleClipClick = (clip) => {
    playerRef.current.seekTo(clip.start);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mt-20">
        <ReactPlayer
          ref={playerRef}
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
          width="640px"
          height="360px"
          controls="true"
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
        <div className="mt-2 w-full text-center">{formatTime(played)} / {formatTime(duration)}</div>
        {/* Timeline bar */}
        <div className="relative left-0 right-0 bottom-0 h-10 bg-gray-700 mt-10">
          <div
            className="absolute left-0 h-full bg-green-500"
            style={{ width: `${played / duration * 100}%` }}
          />
          {/* Clips */}
          {clips.map((clip, index) => (
            <div
              key={index}
              className={clsx(
                'absolute top-0 bottom-0',
                'bg-blue-500 opacity-50 hover:opacity-75 cursor-pointer',
                'border-l border-r',
                'border-gray-400 border-opacity-50'
              )}
              style={{
                left: `${clip.start / duration * 100}%`,
                width: `${(clip.end - clip.start) / duration * 100}%`
              }}
              onClick={() => handleClipClick(clip)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}