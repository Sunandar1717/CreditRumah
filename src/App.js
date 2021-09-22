import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Container from "./components/Container";
import PengajuanKpr from "./pages/PengajuanKpr";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
            </Route>
            <Container>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/transaction">
                <PengajuanKpr />
              </Route>
            </Container>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
