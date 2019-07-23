import React, { Component } from "react";
import $ from "jquery";
window.jQuery = $;
require("signalr");

class ReactSignalR extends Component {
	state = {};

	componentDidMount() {
		var connection = $.hubConnection(
			"http://stage.tripjoy.ir/serviceSocket"
		);
		// var proxy = connection.createHubProxy("myHub");

		connection
			.start()
			.done(function() {
				console.log("Now connected, connection ID=" + connection.id);
			})
			.fail(function() {
				console.log("Could not connect");
			});

		// proxy.on("alertFunctoin", action => {
		// 	alert("changes triggered by " + action + " operation");
		// });
	}

	render() {
		return <div>12313</div>;
	}
}

export default ReactSignalR;
