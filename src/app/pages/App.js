import React, {PropTypes} from 'react';
import Header from '../components/Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Header/>
                </div>
                <div className="row col-lg-offset-2 col-lg-8 jumbotron">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;