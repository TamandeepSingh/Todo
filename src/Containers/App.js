import React, {Component} from 'react';
import '../Styles/App.css';
import Header from '../Components/Header';
import AddTask from '../Components/AddTask';
import ShowOptions from '../Components/ShowOptions';
import Activity from '../Components/Activity';
import data from '../Assets/data.json';

class App extends Component {

  state = data.allTasks;

  addTask = (event) => {
    const newTaskClone = {...this.state.newTasks};
    let lastIdOfArray = newTaskClone.tasks.length;
    let inp = event.target[0].value;
    
    let newID;
    if(lastIdOfArray === 0){
      newID = 0;
    }else{
      newID = newTaskClone.tasks[lastIdOfArray-1].key + 1;
    }

    let newTaskEntered = {"key":newID, "name":inp, "isChecked":false};

    newTaskClone.tasks.push(newTaskEntered);

    this.setState({
      newTasks: newTaskClone
    });

    event.preventDefault();
  }

  completedTask = (event, index) =>{
    const newTaskClone = {...this.state.newTasks};
    let keyOfChecked = newTaskClone.tasks[index].key;

    const completedTaskClone = {...this.state.completedTask};
    
    let completedTask = newTaskClone.tasks[index];
    completedTask.isChecked = true;

    completedTaskClone.tasks.push(completedTask);
    

    newTaskClone.tasks.splice(index, 1);

    // console.log("after checked one");
    // console.log("completed task array : ", completedTaskClone);
    // console.log("new task array : ", newTaskClone);

    setTimeout( () => {
      this.setState({
        newTasks: newTaskClone,
        completedTask: completedTaskClone
      });
    }, 1000 );
    

  }

  

  render(){
    return (
      <div className="App">
        <Header></Header>
        <AddTask addTaskProp = {this.addTask} ></AddTask>
        <ShowOptions></ShowOptions>
        <Activity taskName={this.state.newTasks.tasks} completedTaskprop={this.completedTask} ></Activity>
      </div>
    );
  }
  
}

export default App;
