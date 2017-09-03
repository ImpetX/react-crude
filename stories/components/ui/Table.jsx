import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox/lib/menu';

import {data} from './Tablemodel';

import TableTheme from '../../../src/stylesheet/common/Theme/Table.css';
import MenuTheme from '../../../src/stylesheet/common/Theme/Menu.css';

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
                <MenuItem caption='Delete' theme={MenuTheme} onClick={this.props.onDeleteClick}/>
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

ListTable.propTypes = {
    onDeleteClick: React.PropTypes.func
}