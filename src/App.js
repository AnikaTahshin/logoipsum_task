import "./App.css";
import Home from "./common/home/Home";

import Navbar from "./common/navbar/Navbar";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
