import React, {Component} from 'react';
import CheckBoxes from "./Checkboxes";
import '../Styles/Activity.css';

class Activity extends Component {
    render(){
        const allTasks = this.props;
            return(
                <div>
                <div className="singleCard">
                    <h1>Activities</h1>
                    
                        <CheckBoxes taskAgain = {allTasks} clickedHere={ (event, index) => this.props.completedTaskprop(event, index)} ></CheckBoxes>
                </div>
            </div>
            );
        // });
    }
}

export default Activity;