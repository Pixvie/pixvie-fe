import { io } from "socket.io-client";

console.log(process.env.VUE_APP_SOCKET_SERVER);
console.log(process.env.VUE_APP_API_SERVER);

// "undefined" means the URL will be computed from the `window.location` object
export const socket = io(process.env.VUE_APP_SOCKET_SERVER, {
  path: "/socket/",
  rejectUnauthorized: false,
  autoConnect: false,
}); //
