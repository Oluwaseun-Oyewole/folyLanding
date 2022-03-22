import { Navbar, Purpose } from "./components";
import { Header } from "./container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <Purpose />
      </div>
    </div>
  );
};

export default App;
