import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Routes } from "./Routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
