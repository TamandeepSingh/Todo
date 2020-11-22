import React, {Component} from 'react';
import '../Styles/Activity.css';
import CheckBox from './CheckBox';

class CheckBoxes extends Component{
    render(){

        return this.props.taskAgain.taskName.map( (p, index) =>{
            return(
                <CheckBox 
                    key={p.key} 
                    taskName={p.name} 
                    checkedBox={ (event) => this.props.clickedHere(event, index)} 
                ></CheckBox>
            );
        });
        
    }
}

export default CheckBoxes;
