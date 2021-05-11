import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navBar/NavBar"
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/user/CreateUser";
import Form from "./components/form/Form";
// import { route } from '../../backend/routes/users';


function App() {
  const [save, setsave] = useState(false);
 return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/gallery" exact> 
      <Form setsave={setsave}/>
      </Route>

      {/* <Route path="/gallery" exact component={Form} /> */}
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" exact> 
      <CreateExercise save={save}/>
      </Route>
      {/* <Route path="/create" component={CreateExercise} /> */}
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
