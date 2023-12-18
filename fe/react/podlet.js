const express = require("express");
const Podlet = require("@podium/podlet");
const fs = require("fs");
const app = express();
const podlet = new Podlet({
	name: "react",
	version: "1.0.0",
	pathname: "/",
	manifest: "/manifest.json",
	development: true
});

let rawdata = fs.readFileSync("build/asset-manifest.json");
let assets = JSON.parse(rawdata);

assets.entrypoints.forEach((element, index) => {
	if (element.indexOf(".css") !== -1) {
		podlet.css({value: "http://localhost:3001/" + element});
	} else if (element.indexOf(".js") !== -1) {
		podlet.js({value: "http://localhost:3001/" + element, defer: true});
	}
});

app.use(podlet.middleware());
app.use("/static", express.static("build/static"));
app.get(podlet.content(), (req, res) => {
	res.status(200).podiumSend("<div id=\"react-message\"></div>");
});
app.get(podlet.manifest(), (req, res) => {
	res.status(200).send(podlet);
});
app.listen(3001);
