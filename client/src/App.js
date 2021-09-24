import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/about";
import Navbar from "./components/navBar/NavBar";
import ExercisesList from "./components/notes-list";
import CreateExercise from "./components/create-note";
import Form from "./components/form/Form";
import Search from "./components/Search";

function App() {
  const [save, setsave] = useState(false);
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/search" exact>
            <Search setsave={setsave} save={save} />
          </Route>
          {/* <Route path="/discover" component={Discover} /> */}
          <Route path="/" exact>
            <Form setsave={setsave} save={save} />
          </Route>

          <Route path="/create" exact>
            <CreateExercise save={save} />
          </Route>
          <Route path="/list" exact component={ExercisesList} />
          {/* <Route path="/create" component={CreateExercise} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
