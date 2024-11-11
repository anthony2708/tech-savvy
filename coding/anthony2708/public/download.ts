// import type { Handler, HandlerEvent } from "@netlify/functions";
// import ytdl from "ytdl-core";

// export const handler: Handler = async (event: HandlerEvent) => {
//   try {
//     let bodyJSON = JSON.parse(event.body);
//     const info = await ytdl.getInfo(bodyJSON.data.url);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         url: "https://www.youtube.com/embed/" + info.videoDetails.videoId,
//         title: info.videoDetails.title,
//         info: info.formats.sort((a, b) => {
//           if (a.mimeType < b.mimeType) {
//             return -1;
//           } else if (a.mimeType > b.mimeType) {
//             return 1;
//           } else {
//             return 0;
//           }
//         }),
//       }),
//     };
//   } catch (error) {
//     return {
//       statusCode: 404,
//       body: JSON.stringify({
//         status: 404,
//         message: "Không tìm thấy video mà bạn yêu cầu.",
//         english: "Video not found.",
//       }),
//     };
//   }
// };
