import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
export const socket = io(`${process.env.VUE_APP_API_SERVER}`, {
  path: "/api/socket/",
  rejectUnauthorized: false,
}); //
