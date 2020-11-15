import React, {Component} from 'react';
import '../Styles/Header.css';

class Header extends Component{

    

    render(){
        return(
            <div>
                <ul className="topnav">
                    <li><a href="#home">Home</a></li>
                    <li className="center" >To Do App</li>
                    {/* <li><a href="#contact">Contact</a></li> */}
                    <li className="right"><a href="#login">Login</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
