import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import data from "./data";

function App() {
  let cards = data.map( item => {
    return (
      <Card 
        key={item.id}
        item= {item}
      />
    )
  })
  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

export default App;

