import React, {PropTypes}from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <IndexLink to="/" activeClassName="active" className="navbar-brand">
                        Save To Drive
                    </IndexLink>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/login" activeClassName="active">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" activeClassName="active">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;