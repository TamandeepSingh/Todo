import React, {Component} from 'react';
import '../Styles/Activity.css';

class CheckBox extends Component{
    render(){
            return(
                <div>
                    <label className="container">{this.props.taskName}
                        <input  type="checkbox" onChange={this.props.checkedBox} />
                        <span className="checkmark"></span>
                    </label>
                </div>
            );
        
    }
}

export default CheckBox;
