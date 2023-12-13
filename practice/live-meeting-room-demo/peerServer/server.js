const { PeerServer } = require("peer");

const peerServer = PeerServer({
  port: 5500,
  path: "/peerjs",
});

console.log(`PeerJS server running on http://localhost:5500/peerjs`);
