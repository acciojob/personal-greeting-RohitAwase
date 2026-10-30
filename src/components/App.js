
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <p>Hello, {name}!</p>}
    </div>
  );
};

export default App;
