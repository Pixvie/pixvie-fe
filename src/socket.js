import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
export const socket = io("https://pixvie.tech", {
  path: "/api/socket.io/",
  rejectUnauthorized: false,
}); //
