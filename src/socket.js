import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const url = new URL(process.env.VUE_APP_API_SERVER);

export const socket = io(`https://${url.hostname}`, {
  path: "/api/socket/",
  rejectUnauthorized: false,
}); //
