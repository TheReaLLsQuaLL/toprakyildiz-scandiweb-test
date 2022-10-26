import React from "react";
import { Switch, Route } from "react-router-dom";

//Layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
//Pages
import "./default.scss";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
