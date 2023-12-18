const express = require("express");
const app = express();
const Index = require("@podium/layout");
const page = new Index({
	name: "homeLayout",
	pathname: "/"
});
const react = page.client.register({
	name: "react",
	uri: "http://localhost:3001/manifest.json"
});
const vue = page.client.register({
	name: "vue",
	uri: "http://localhost:3002/manifest.json"
});

page.css({value: "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"});

app.use(page.middleware());
app.get("/", async (req, res) => {
	const incoming = res.locals.podium;
	const content = await Promise.all([
		react.fetch(incoming),
		vue.fetch(incoming)
	]);

	incoming.podlets = content;
	incoming.view.title = "Home Page";

	res.podiumSend(`<div class="container">
    ${content[0]}
    ${content[1]}
  </div>
  `);
});


app.listen(3000);