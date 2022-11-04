import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search/Search";
import Header from "./Components/Header/Header";
import data from "./datos";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div>
        <Search placeholder="Enter Pokemon Data" className="placeholder"/>
      </div>
    </div>
  );
}

export default App;
