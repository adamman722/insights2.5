import React, { useEffect } from "react";

import "./App.css";
import axios from "axios";

function App() {
  //this is going to be a theme test see how it actually works
  //start 620pm
  // really don't feel like it  damn I need to find my motivation
  //I am slowly sinking more and more into my code and this is all I feel is right anymore
  // token 51210047-2547-4fbc-b60f-b06f28647c7a
  const grabTokens = async () => {
    const url = "http://localhost:3000/api.coincap.io/v2/assets/bitcoin";
    const config = {
      headers: { Authorization: "Bearer 51210047-2547-4fbc-b60f-b06f28647c7a" },
    };
    axios.post(url, config).then(console.log);
  };

  useEffect(() => {
    grabTokens();
  }, []);

  return <></>;
}

export default App;
