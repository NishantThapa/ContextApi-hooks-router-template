import React from 'react';
import {ContextProvider} from './Context/ContextProvider'
import LoginPage from "./Components/Login"
import Child from './Components/child'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <ContextProvider >
      <Router>
      <Switch>
      <Route path="/home"><Child/></Route>
      <Route path="/"><LoginPage/></Route>
      </Switch>
      </Router>
     
    </ContextProvider>
  );
}

export default App;
