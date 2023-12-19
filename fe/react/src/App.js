import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { MessageBus } from "@podium/browser";

function App() {
  const messageBus = new MessageBus();
  const [messager, setMessage] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1081/hello')
        .then(response => response.text())
        .then(json => setData(json))
        .catch(error => console.error(error));
  }, []);

  messageBus.subscribe('internalchannel', 'newMessage', event => {
    if(event.payload.from !== "react panel"){
      setMessage(event.payload.message);
    }
  });

  function handleChange(e) {
    messageBus.publish("internalchannel", "newMessage", {
      message: e.target.value,
      from: "react panel",
    });
    setMessage(e.target.value);
  }

  // do not mind the ugly hack where the window location is replaced... 
  // demo only
  return (
  <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Microservices & Micro Front End example</h1>
    <p class="lead">EDTS webinar x UKDC</p>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">This section is built by React, calling Golang API</h5>
        <div class="form-group">
          <label for="exampleFormControlInput1">{data}</label>
          <input
            className={`form-control ${styles.customCss}`}
            type="text"
            value={messager}
            onChange={handleChange}
            placeholder="Send a message..."
          />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
