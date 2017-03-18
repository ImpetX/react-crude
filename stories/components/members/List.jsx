import React, {Component} from 'react';
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox/lib/menu';

import Searchbox from '../ui/Searchbox';
import ListTable from '../ui/Table';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/members/components/css/List.css';

export default class MemberList extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Members <span>/</span> <span>List</span></h1>
                </div>
                <Searchbox />
                <div style={{marginTop: '25px'}}>
                    <ListTable />
                </div>
                <IconMenu icon='more_vert' position='topLeft' menuRipple>
                    <MenuItem value='download' icon='get_app' caption='Download' />
                    <MenuItem value='help' icon='favorite' caption='Favorite' />
                    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
                    <MenuDivider />
                    <MenuItem value='signout' icon='delete' caption='Delete' disabled />
                </IconMenu>
            </div>
        );
    }
}