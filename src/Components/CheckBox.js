import React, {Component} from 'react';
import '../Styles/Activity.css';

class CheckBox extends Component{
    render(){

        console.log("props in checkbox : ", this.props);
        return this.props.taskAgain.taskName.map( (p, index) =>{
            return(
                <div>
                    <label className="container">{p.name}
                        <input type="checkbox"  />
                        <span className="checkmark"></span>
                    </label>
                </div>
            );
        });
        
    }
}

export default CheckBox;
