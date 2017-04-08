import React, {Component} from 'react';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import Styles from '../../stylesheet/common/Pagination.css';

export default class Pagination extends Component {
    render() {
        return (
            <div>
                <div className={Styles.leftarrow}>
                    <div className={Styles.arrowicon}>
                        <LeftArrow className={Styles.icon} />
                    </div>
                </div>
                <div className={Styles.stat}>
                    <p>
                        Page <span className={Styles.current}>1</span> of 1
                    </p>
                </div>
                <div className={Styles.rightarrow}>
                    <div className={Styles.arrowicon}>
                        <RightArrow className={Styles.icon} />
                    </div>
                </div>
            </div>
        );
    }
}