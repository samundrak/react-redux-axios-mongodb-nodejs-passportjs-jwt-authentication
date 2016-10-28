import React  from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {

    render() {
        return (
            <div >
                <div className="omb_login">
                    <h3 className="omb_authTitle">Login or <Link to="/register" activeClassName="active">Sign up</Link>
                    </h3>
                   

                    <div className="row omb_row-sm-offset-3 omb_loginOr">
                        <div className="col-xs-12 col-sm-6">
                            <hr className="omb_hrOr"/>
                            <span className="omb_spanOr">or</span>
                        </div>
                    </div>

                    <div className="row omb_row-sm-offset-3">
                        <div className="col-xs-12 col-sm-6">
                            <form className="omb_loginForm" action="" autoComplete="off" method="POST">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" name="username"
                                           placeholder="email address"/>
                                </div>
                                <span className="help-block"></span>

                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="password" className="form-control" name="password"
                                           placeholder="Password"/>
                                </div>
                                <span className="help-block">Password error</span>

                                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

/*Remember me and Forget password snippet*/
// <div className="row omb_row-sm-offset-3">
//     <div className="col-xs-12 col-sm-3">
//         <label className="checkbox">
//             <input type="checkbox" value="remember-me"/>Remember Me
//         </label>
//     </div>
//     <div className="col-xs-12 col-sm-3">
//         <p className="omb_forgotPwd">
//             <a href="#">Forgot password?</a>
//         </p>
//     </div>
// </div>