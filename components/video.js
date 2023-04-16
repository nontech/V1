import Link from 'next/link';

export default function Video({ videoData }) {
  const { id, title, author } = videoData;
  return (
    <>
      <span>{id}</span>
      <span>
        <Link href="/videos/[id]" as={`/videos/${id}`}>{title}</Link>
      </span>
      <span>{author}</span>
    </>
  )
}