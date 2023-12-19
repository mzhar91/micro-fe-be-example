<template>
	<div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">This section is built by Vue, calling JAVA API</h5>
				<div class="form-group">
					<label for="exampleFormControlInput1">{{title}}</label>
					<input v-model="message" class="form-control" placeholder="Send a message"/>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import {MessageBus} from "@podium/browser";

const messageBus = new MessageBus();

export default {
	name: "Index",
	data() {
		return {
			message: "",
			title: ""
		};
	},
	watch: {
		message: function (value) {
			messageBus.publish("internalchannel", "newMessage", {
				message: value,
				from: "vue panel"
			});
		}
	},
	mounted: function () {
        this.fetchData();
		messageBus.subscribe("internalchannel", "newMessage", event => {
			if (event.payload.from !== "vue panel") {
				this.message = event.payload.message;
			}
		});
	},
	methods: {
		fetchData() {
			fetch('http://localhost:1080/hello')
				.then(response => response.text())
				.then(json => this.title = json)
				.catch(error => console.error(error));
    	},
  	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
	background-color: #42B983;
}
</style>
