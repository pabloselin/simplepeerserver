const fs = require("fs");
const { PeerServer } = require("peer");

const peerServer = PeerServer({
	port: 9000,
	path: "/cenexxxpeerserver",
	ssl: {
		key: fs.readFileSync(
			"/etc/letsencrypt/live/radio.cenexxx.cl/privkey.pem"
		),
		cert: fs.readFileSync(
			"/etc/letsencrypt/live/radio.cenexxx.cl/cert.pem"
		),
	},
});

console.log(peerServer, "init");
