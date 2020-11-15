import React, {Component} from 'react';
import '../Styles/App.css';
import Header from '../Components/Header';
import AddTask from '../Components/AddTask';
import ShowOptions from '../Components/ShowOptions';
import Activity from '../Components/Activity';
import data from '../Assets/data.json';

class App extends Component {

  state = data.allTasks;

  // state = {
  //   newTasks : {
  //     tasks : [
  //       { id:1, name:"Learn React" },
  //       { id:2, name:"Do project"},
  //       { id:3, name:"play footbal"},
  //       { id:4, name:"dance"}
  //     ],
  //     isShowingPersons: false
  //   }, 

  //   activeTask: {
  //     tasks : [
  //       { id:1, name:"Learn JS" },
  //       { id:2, name:"Drive car"},
  //       { id:3, name:"Do running"}
  //     ],
  //     isShowingPersons: false
  //   },

  //   completedTask : {
  //     tasks : [
  //       { id:1, name:"set alarm" },
  //       { id:2, name:"prepare for exam"},
  //     ],
  //     isShowingPersons: false
  //   }
    
  // }

  addTask = () => {

  }

  

  render(){
    return (
      <div className="App">
        <Header></Header>
        <AddTask  ></AddTask>
        <ShowOptions></ShowOptions>
        <Activity taskName={this.state.newTasks.tasks} ></Activity>
      </div>
    );
  }
  
}

export default App;
