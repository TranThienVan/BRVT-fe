import "./App.css";
import Icon from "./Components/Icon/Icon";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Icon />
      <Service />
    </div>
  );
}

export default App;
