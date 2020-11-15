import React, {Component} from 'react';
import '../Styles/AddTask.css';

class ShowOptions extends Component{
    render(){
        return(
            <div className="showOptions" >
                <button>Show all Tasks</button>
                <button>Show active Tasks</button>
                <button>Show completed Tasks</button>
            </div>
        );
    }
}

export default ShowOptions;