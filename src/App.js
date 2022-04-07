import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { createGlobalStyle } from "styled-components";
import Dashboard from "./pages/Dashboard";
import DetailOfTourist from "./pages/DetailOfTourist";
import Logout from "./pages/Logout";

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/detail" component={DetailOfTourist} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
