import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import Form from "./form/Form"
import "../components/form/maincontainer.css";
import "./form/maincontainer.css"
import { withRouter } from "react-router";


class CreateExercise extends Component {

  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDescriptio = this.onChangeDescriptio.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: this.props.save.title +', ' +this.props.save.artistName+', '+this.props.save.completitionYear,
      descriptio: 
      // `: ` + localStorage.getItem(`user1`) + 
      "for more info: "+`https://www.wikiart.org/en/${this.props.save.title}/`,
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        console.log(this.props)
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
           
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDescriptio(e) {
    this.setState({
      descriptio: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      descriptio: this.state.descriptio,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercise/', exercise)
      .then(res => this.props.history.push('/'));

    // window.location = '/';
  }

  render() {
    return (
    <div className="noteImg">
      {/* <h4>{this.props.save.title}</h4> */}
      {/* <h4>{localStorage.getItem(`user2`)}</h4> */}
                {/* <h4 className="t">{localStorage.getItem(`user`)}</h4> */}
       
      {/* <img src={localStorage.getItem(`user1`)} alt="image"></img> */}
      {this.props.save && <img className="image" src={this.props.save.image} alt="image"></img>}
      <form className="form" onSubmit={this.onSubmit}>
        {/* {/* <div className="form-group">  */}
        {/* <div className="form-group">
          <label>Username: </label>
          <select ref="userInput"
              // required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>  */}
        <div className="form-group"> 
          <label>Title and Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <label>Personal Notes: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.props.save && this.state.descriptio}
              onChange={this.onChangeDescriptio}
              />
       
{/* 
        <div className="form-group"> 
    <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>  */}
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <div>

       </div>
        </div>

        
        <div className="form-group">
          <input type="submit" value="Create Note" className="createNoteBtn" />
        </div>
      </form>
    </div>
    )
  }
}


export default withRouter(CreateExercise);