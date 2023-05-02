# Thea _ frontend

**Thea** is a web application for epileptic patients where they can upload their videos and videos are assessed for epileptic episodes by AI and verified by a doctor. 

This repository contains the frontend code for the application built using __Next.js__.

## Setting up Development Environment

To set up a development environment for this project, follow these steps:

1. First and formost, make sure the backend is running on your local machine. Follow the guide on the README.md page of [thea_backend](https://github.com/nontech/thea_backend#thea-_-backend).

2. Clone the repository to your local machine
    ```
    git clone https://github.com/nontech/V1.git
    ```
3. Navigate to the project directory
    ```
    cd V1
    ```

4. Install the dependencies
    ```
    npm install
    ```
    
5. Start the development server
    ```
    npm run dev
    ```
    
6. Open the web browser and go to `http://localhost:3000/` to see the application running.


## Project Architecture

The architecture of the Thea web application is as follows:

![Thea Architecture](https://user-images.githubusercontent.com/14184188/235128125-199d74f3-9fb4-4ceb-b631-a0b6c6113872.png)

- The frontend Next.js app is hosted on Vercel. 
- When a user goes to the website in their browser, the request first goes to Vercel's servers. 
- Vercel's servers then forward the request to the Next.js app running on the server.

The frontend is responsible for 
- server-side rendering of pages, 
- authentication and authorization, and 
- the whole user interface. 

When the user interacts with the website, the frontend sends requests to the backend API (not shown in the diagram), which is responsible for processing the requests, analyzing the videos using AI, and verifying the epileptic episodes with a doctor. Once the backend API responds, the frontend renders the appropriate page.

### Features provided by frontend:

- Upload a video
- Self-mark epileptic episodes on the video
- View list of all uploaded videos
- View a video and see episodes marked by AI and approved by doctor

## Production (Hosting)

The frontend Nextjs app is hosted on vercel (a web hosting platform). 
The hosted link is https://v1-weld-zeta.vercel.app/.
