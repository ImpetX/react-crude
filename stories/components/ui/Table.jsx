import React, {Component} from 'react';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox/lib/menu';

import {data} from './Tablemodel';

import TableTheme from '../../../src/modules/members/components/css/Theme/Table.css';
import MenuTheme from '../../../src/modules/members/components/css/Theme/Menu.css';

export default class ListTable extends Component {
    generateTableHeader() {
        let headItems = ['Name', 'Contact', 'Blood Group', 'Action'];

        return headItems.map((item, index) => {
            return (
                <TableCell key={index} theme={TableTheme}>{item}</TableCell>
            );
        });
    }
    actionMenu() {
        return (
            <IconMenu icon='more_vert' position='topLeft' menuRipple>
                <MenuItem caption='Edit' theme={MenuTheme}/>
                <MenuItem caption='Delete' theme={MenuTheme}/>
            </IconMenu>
        );
    }

    getTableRow() {
        return data.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.contact}</TableCell>
                    <TableCell>{item.bloodGroup}</TableCell>
                    <TableCell>
                        {this.actionMenu()}
                    </TableCell>
                </TableRow>
            );
        });
    }

    render() {
        console.log('TableTheme', TableTheme);
        return (
            <Table selectable={false} theme={TableTheme}>
                <TableHead>
                    {this.generateTableHeader()}
                </TableHead>
                {this.getTableRow()}
            </Table>
        );
    }
}