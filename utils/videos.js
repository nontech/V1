import fs from 'fs';
import path from 'path';

export async function readJsonFile() {
  const filePath = path.join(process.cwd(), 'dummy_data', 'videos.json');
  const fileContents = await fs.promises.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// data is an array of objects
// [
//   {
//     author: 'Vlad',
//     id: "1",
//     isLive: true,
//     ...
//   },
//   {
//     ...
//   }
// ]
// const data = await readJsonFile();

export function getSortedVideosData() {
  // get data

  // Sort posts by date
  // return allVideosData.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
}

export function getAllVideoIds() {
  // read json file from local
  //const videos = readJsonFile();
  
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  // return videos.map((videoObject) => {
  //   return {
  //     params: {
  //       id: videoObject.id,
  //     },
  //   };
  // });
}

export async function getVideoData(id) {
    // const fullPath = path.join(postsDirectory, `${id}.md`);
    // const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // // Use gray-matter to parse the post metadata section
    // const matterResult = matter(fileContents);
  
    // // Use remark to convert markdown into HTML string
    // const processedContent = await remark()
    //   .use(html)
    //   .process(matterResult.content);
    // const contentHtml = processedContent.toString();
  
    // // Combine the data with the id and contentHtml
    // return {
    //   id,
    //   contentHtml,
    //   ...matterResult.data,
    // };
  }