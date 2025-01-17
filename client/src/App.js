import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((req) => req.json())
      .then((data) => setItems(data));
  }, []);

  function renderItems() {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      );
    });
  }

  return (
    <main>
      <h1>Example webshop</h1>
      <a href="https://react.dev/learn">renders learn react link'</a>
      {renderItems()}
    </main>
  );
}

export default App;