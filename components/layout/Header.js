import Link from 'next/link'

export default function Header() {
  return (
    <nav class="bg-gray-800 shadow h-12">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center h-full">
        <div class="flex-shrink-0 w-12">
          <div href="#" class="text-white text-lg font-medium">V1</div>
        </div>
        <div class="hidden sm:block">
          <div class="flex space-x-4 items-center">
            <Link href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/videos" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Videos</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}