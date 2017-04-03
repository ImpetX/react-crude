import React, {Component} from 'react';
import Dialog from 'react-toolbox/lib/dialog';

import Searchbox from '../ui/Searchbox';
import ListTable from '../ui/Table';
import Pagination from '../ui/pagination/Pagination';
import PageHeader from '../ui/pageheader/PageHeader';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/members/components/css/List.css';
import ModalTheme from '../../../src/modules/members/components/css/Theme/Modal.css';

export default class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        };

        this.handleModalToggle = this.handleModalToggle.bind(this);
    }

    handleModalToggle() {
        this.setState(prevState => ({
            modalShow: !prevState.modalShow
        }));
        console.log('this.state.modalShow', this.state.modalShow);
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
                <div className={Styles['header-wrapper']}>
                    <PageHeader moduleName='Members' componentName='List' />
                </div>

                <div className={Styles['searchbox-wrapper']}>
                    <Searchbox />
                </div>
                <div className={Styles['table-wrapper']}>
                    <ListTable onDeleteClick={this.handleModalToggle}/>
                </div>
                <div className={Styles.footer}>
                    <p className={Styles.totalentry}>There are total 1000 members</p>
                    <div>
                        <Pagination />
                    </div>
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