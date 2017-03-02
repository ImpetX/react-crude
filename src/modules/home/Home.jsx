import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to='/kamal' >Kamal</Link>
                <Link to='/jamal' >Jamal</Link>

                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    children: React.PropTypes.node
}