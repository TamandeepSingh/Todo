import React, {Component} from 'react';
import '../Styles/AddTask.css';

class AddTask extends Component{
    render(){
        return(
            <div>
                <div className="singleCard">
                    <h1>What needs to be done</h1>
                    <form onSubmit={this.props.addTaskProp} >
                        <input type="text" ></input>
                        <button >Add</button>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default AddTask;
