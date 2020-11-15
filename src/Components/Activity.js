import React, {Component} from 'react';
import CheckBox from './CheckBox';
import '../Styles/Activity.css';

class Activity extends Component {
    render(){
        const allTasks = this.props;
        console.log("props : ", this.props);
            return(
                <div>
                <div className="singleCard">
                    <h1>Activities</h1>
                    
                        <CheckBox taskAgain = {allTasks} ></CheckBox>
                </div>
            </div>
            );
        // });
    }
}

export default Activity;