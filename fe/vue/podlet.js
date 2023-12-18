const express = require("express");
const Podlet = require("@podium/podlet");
const fs = require("fs");

const app = express();

// Basic definition of the podlet
const podlet = new Podlet({
	name: "vue",
	version: "1.0.0",
	pathname: "/",
	manifest: "/manifest.json",
	development: true
});

let vueCssAssets = fs.readdirSync("dist/css");
vueCssAssets.forEach((element, index) => {
	if (element.indexOf(".css") !== -1 && element.indexOf(".css.map") === -1) {
		podlet.css({value: "http://localhost:3002/css/" + element});
	}
});

let vueJsAssets = fs.readdirSync("dist/js");
vueJsAssets.forEach((element, index) => {
	if (element.indexOf(".js") !== -1 && element.indexOf(".js.map") === -1) {
		podlet.js({value: "http://localhost:3002/js/" + element, defer: true});
	}
});

app.use("/css", express.static("dist/css/"));
app.use("/js", express.static("dist/js/"));
app.use(podlet.middleware());
app.get(podlet.content(), (req, res) => {
	res.status(200).podiumSend("<div id=\"vue-message\"></div>");
});
app.get(podlet.manifest(), (req, res) => {
	res.status(200).send(podlet);
});
app.listen(3002);
