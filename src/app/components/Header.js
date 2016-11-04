import React from 'react';
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
                        <Link to="/upload" activeClassName="active">
                            Upload
                        </Link>
                    </li>
                    <li>
                        <Link to="/history" activeClassName="active">
                            History
                        </Link>
                    </li>
                    <li>
                        <Link to="/me" activeClassName="active">
                            Me
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" activeClassName="active">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;