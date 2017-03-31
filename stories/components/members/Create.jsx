import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';

import PageHeading from '../ui/pageheader/PageHeading';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/members/components/css/Create.css';
import InputTheme from '../../../src/stylesheet/common/Theme/Input.css';

export default class MemberCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameBengali : '',
            nameEnglish : '',
            fatherName: '',
            motherName: ''
        };
        this.handleNameBengaliChange = this.handleChange.bind(this, 'nameBengali');
        this.handleNameEnglishChange = this.handleChange.bind(this, 'nameEnglish');
        this.handleFatherNameChange = this.handleChange.bind(this, 'fatherName');
        this.handleMotherNameChange = this.handleChange.bind(this, 'motherName');
    }

    handleChange(name, value) {
        this.setState(
            {
                [name]: value
            }
        );
    }
    render() {
        return (
            <div>
                <div className={Styles['header-wrapper']}>
                    <PageHeading moduleName='Members' componentName='Create'/>
                </div>

                <p className={Styles['required-notif']}>**All the fields are required.</p>

                <div>
                    <form>
                        <div>
                            <div>
                                <Input type='text' label='Name [Bengali]' theme={InputTheme} value={this.state.nameBengali} onChange={this.handleNameBengaliChange}/>
                            </div>

                            <div>
                                <Input type='text' label='Name [English]' theme={InputTheme} value={this.state.nameEnglish} onChange={this.handleNameEnglishChange}/>
                            </div>

                            <div>
                                <Input type='text' label="Father's name" theme={InputTheme} value={this.state.fatherName} onChange={this.handleFatherNameChange}/>
                            </div>

                            <div>
                                <Input type='text' label="Mother's name" theme={InputTheme} value={this.state.motherName} onChange={this.handleMotherNameChange}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}