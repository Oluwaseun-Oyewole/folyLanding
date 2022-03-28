import { Navbar, Purpose, Product, Testimony } from "./components";
import { Header } from "./container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <Purpose />
        <Product />
        <Testimony />
      </div>
    </div>
  );
};

export default App;
