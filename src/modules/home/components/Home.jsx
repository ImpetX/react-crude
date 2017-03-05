import React, {Component} from 'react';
import {Link} from 'react-router';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

import 'styles/main';

export default class Home extends Component {
    render() {
        const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
        return (
            <div>
                <Link to='/kamal' >Kamal</Link>
                <Link to='/jamal' >Jamal</Link>

                <div>
                    {this.props.children}
                    <img src='./src/assets/images/smiley.svg' alt='smiley face' style={{height: '40px'}}/>
                    <Card style={{width: '350px'}}>
                        <CardTitle
                          avatar="https://placeimg.com/80/80/animals"
                          title="Avatar style title"
                          subtitle="Subtitle here"
                        />
                        <CardMedia
                          aspectRatio="wide"
                          image="https://placeimg.com/800/450/nature"
                        />
                        <CardTitle
                          title="Title goes here"
                          subtitle="Subtitle here"
                        />
                        <CardText>{dummyText}</CardText>
                        <CardActions>
                            <Button label="Action 1" />
                            <Button label="Action 2" />
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    children: React.PropTypes.node
}