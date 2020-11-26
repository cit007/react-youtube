import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from "./pages/Main"
import Search from "./pages/Search"
import Detail from "./pages/Detail"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
