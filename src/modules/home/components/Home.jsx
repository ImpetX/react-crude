import React, {Component} from 'react';
import {Link} from 'react-router';

import 'styles/main';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to='/kamal' >Kamal</Link>
                <Link to='/jamal' >Jamal</Link>

                <div>
                    {this.props.children}
                    <img src='./src/assets/images/smiley.svg' alt='smiley face' style={{height: '40px'}}/>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    children: React.PropTypes.node
}