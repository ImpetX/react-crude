import React, {Component} from 'react';

import Hello from 'modules/hello/components/Hello';

import styles from './css/Jamal'

export default class Jamal extends Component {
    render() {
        return <Hello name='Jamal' className={styles.hello}/>
    }
}