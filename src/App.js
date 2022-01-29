import "./App.css";
import Header from "./components/header/header";
import Card from "./components/card/card";
import { cards } from "./ArrayCard.js";

function App() {

  return (
    <>
      <Header />
      <div className="container">
        {cards.map(card=> <Card key={card.id} card={card}/>)}
      </div>
    </>
  );
}

export default App;
