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

	res.podiumSend(`
	<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">SG-EDTS</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="https://sg-edts.com/">Home</a>
        <a class="p-2 text-dark" href="https://sg-edts.com/#home-project">Projects</a>
        <a class="p-2 text-dark" href="https://sg-edts.com/careers">Careers</a>
        <a class="p-2 text-dark" href="https://sg-edts.com/expertise">Expertise</a>
      </nav>
    </div>
	<div class="container">
		${content[0]}
		${content[1]}
  	</div>
  `);
});


app.listen(3000);