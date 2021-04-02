
import React from 'react';

export default class Nav extends React.Component {
    constructor(){
        super();
        this.state = {
            menu: "closed"
        }
    }
    menu = () => {
        if(this.state.menu === 'closed'){
            this.setState({ menu: "pickle"})
        } else {
            this.setState({ menu: "closed"})
        }
        
    }
    render(){
        return (
            <nav className='nav'><button  className='menu' onClick={this.menu}>
            Menu  ☰
            </button>
            <ul className={this.state.menu === 'closed' ? "closed" : ""}>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Contacts</li>
                            </ul>
                            </nav>)
    }
}
    