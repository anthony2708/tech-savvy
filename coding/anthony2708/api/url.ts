import type { Handler, HandlerEvent } from "@netlify/functions";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const history: { [key: string]: number } = {};

const rateLimit = (ip: string, timeout: number = 1000): boolean => {
  if (history[ip] > Date.now() - timeout) {
    return true;
  }
  history[ip] = Date.now();
  return false;
};

const checkUrl = (string: string): boolean => {
  let url: URL;
  try {
    url = new URL(string);
    return Boolean(url.protocol === "http:" || url.protocol === "https:");
  } catch (error) {
    return false;
  }
};

const handler: Handler = async (event: HandlerEvent) => {
  try {
    if (rateLimit(event.headers["client-ip"]) == true) {
      return {
        statusCode: 429,
        body: JSON.stringify({
          status: 429,
          message: "Hệ thống đang bận. Xin vui lòng thử lại sau.",
          english: "Too many requests. Please try again later.",
        }),
      };
    }
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({
          status: 405,
          message: "Phương thức không được hỗ trợ.",
          english: "Method not allowed.",
        }),
      };
    }
    const body = JSON.parse(event.body);
    if (!body.data.url) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          status: 400,
          message: "Không có thông tin. Xin vui lòng thử lại.",
          english: "No information. Please try again.",
        }),
      };
    }
    if (!checkUrl(body.data.url)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          status: 400,
          message: "Đường dẫn không hợp lệ. Xin vui lòng thử lại.",
          english: "Invalid URL. Please try again.",
        }),
      };
    }
      // Fetch and return
      const response = await fetch("https://spoo.me/", {
        method: "POST",
        body: `url=${encodeURIComponent(body.data.url)}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "	application/json"
        },
      });
      const data: any = await response.json();
      if (data.short_url != undefined) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            status: 200,
            message: decodeURIComponent(data.short_url),
          }),
        };
      } else {
        return {
          statusCode: 404,
          body: JSON.stringify({
            status: 404,
            message:
              "Không thể tìm thấy đường dẫn mà bạn yêu cầu. Xin vui lòng thử lại.",
            english: "Cannot find the URL you requested. Please try again.",
          }),
        };
      }
    }
  catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        status: 404,
        error: error.message,
        stack: error.stack,
        message:
          "Không thể tìm thấy đường dẫn mà bạn yêu cầu. Xin vui lòng thử lại.",
        english: "Cannot find the URL you requested. Please try again.",
      }),
    };
  }
};

export { handler };
