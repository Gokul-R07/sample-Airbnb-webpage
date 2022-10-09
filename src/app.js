import { NavBar } from "./components/navBar";
import { MainContent } from "./components/mainContent";
import { Card } from "./components/card";
import data from "./components/data";

export function App() {
  const cardList = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div>
      <NavBar />
      <MainContent />
      <div className="projectSection">{cardList}</div>
      <br />
    </div>
  );
}
