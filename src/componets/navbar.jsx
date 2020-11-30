import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
             <i className="navbar-logo fas ga-leaf "></i> 
             <span>Havit Tracker</span>
             <span className="navbar-count">{this.props.totalCount}</span>  
            </nav>
        );
    }
}

export default Navbar;