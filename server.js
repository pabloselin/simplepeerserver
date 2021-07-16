const fs = require("fs");
const { PeerServer } = require("peer");

const peerServer = PeerServer({
	port: 9000,
	path: "/cenexxxpeerserver",
	key: "cenexxx",
	ssl: {
		key: fs.readFileSync(
			"/etc/letsencrypt/live/radio.cenexxx.cl/privkey.pem"
		),
		cert: fs.readFileSync(
			"/etc/letsencrypt/live/radio.cenexxx.cl/cert.pem"
		),
	},
});
