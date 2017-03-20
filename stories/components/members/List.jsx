import React, {Component} from 'react';
import Dialog from 'react-toolbox/lib/dialog';

import Searchbox from '../ui/Searchbox';
import ListTable from '../ui/Table';
import TooltipButton from '../ui/TooltipButton';
import Pagination from '../ui/pagination/Pagination';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/members/components/css/List.css';
import ModalTheme from '../../../src/modules/members/components/css/Theme/Modal.css';
import TooltipButtonTheme from '../../../src/modules/members/components/css/Theme/TooltipButton.css';

export default class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        };

        this.handleModalToggle = this.handleModalToggle.bind(this);
    }

    handleModalToggle() {
        this.setState(
            {
                modalShow: !this.state.modalShow
            }
        )
    }

    getModalActions() {
        let actions = [
            {
                label: 'Ok',
                onClick: this.handleModalToggle
            },

            {
                label: 'Cancel',
                onClick: this.handleModalToggle
            }
        ];


        return actions;
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Members <span>/</span> <span>List</span></h1>
                </div>
                <TooltipButton icon='add' floating tooltip='Add new member' theme={TooltipButtonTheme}/>
                <Searchbox />
                <div style={{marginTop: '25px', marginBottom: '25px'}}>
                    <ListTable onDeleteClick={this.handleModalToggle}/>
                </div>
                <div>
                    <div>
                        <p>There are total 1000 members</p>
                    </div>
                    <Pagination />
                </div>
                <Dialog
                    actions={this.getModalActions()}
                    active={this.state.modalShow}
                    onEscKeyDown={this.handleModalToggle}
                    onOverlayClick={this.handleModalToggle}
                    type='small'
                    theme={ModalTheme}
                >
                    <p>Are you sure to delete this member?</p>
                </Dialog>
            </div>
        );
    }
}