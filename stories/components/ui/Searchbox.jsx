import React, {Component} from 'react';

import Styles from '../../../src/modules/members/components/css/Searchbox.css';

export default class Searchbox extends Component {
    render() {
        return (
            <div className={Styles.searchbox}>
                <div className={Styles.searchicon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" className={Styles.searchsvg}><path d="M96.394 92.655l-28.31-28.317c5.554-6.5 8.928-14.916 8.928-24.117 0-20.515-16.688-37.203-37.202-37.203S2.607 19.706 2.607 40.221c0 20.514 16.689 37.203 37.203 37.203 8.604 0 16.512-2.962 22.821-7.885l28.435 28.443 5.328-5.327zM39.81 69.89c-16.359 0-29.668-13.31-29.668-29.669S23.45 10.553 39.81 10.553c16.358 0 29.669 13.309 29.669 29.668S56.168 69.89 39.81 69.89z"/></svg>
                </div>
                <input type='text' placeholder='Search' className={Styles.searchinput}/>
            </div>
        );
    }
}