import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
export const socket = io(process.env.VUE_APP_SOCKET_SERVER, {
  path: "/socket/",
  rejectUnauthorized: false,
  autoConnect: false,
}); //
