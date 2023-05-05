import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
console.log(process.env.VUE_APP_API_SERVER);
export const socket = io("https://pixvie.tech", {
  path: "/api/socket/",
  rejectUnauthorized: false,
}); //
