import React from 'react';
export default class SocialRegister extends React.Component {
    render() {
        return (
            <div className="omb_login">
                <div className="row omb_row-sm-offset-3 omb_socialButtons">
                    <div className="col-xs-4 col-sm-2">
                        <a href="#" className="btn btn-lg btn-block omb_btn-facebook">
                            <i className="fa fa-facebook visible-xs"></i>
                            <span className="hidden-xs">Facebook</span>
                        </a>
                    </div>
                    <div className="col-xs-4 col-sm-2">
                        <a href="#" className="btn btn-lg btn-block omb_btn-twitter">
                            <i className="fa fa-twitter visible-xs"></i>
                            <span className="hidden-xs">Twitter</span>
                        </a>
                    </div>
                    <div className="col-xs-4 col-sm-2">
                        <a href="#" className="btn btn-lg btn-block omb_btn-google">
                            <i className="fa fa-google-plus visible-xs"></i>
                            <span className="hidden-xs">Google+</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
