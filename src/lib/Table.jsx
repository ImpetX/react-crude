import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox/lib/menu';

import TableTheme from '../stylesheet/common/Theme/Table.css';
import MenuTheme from '../stylesheet/common/Theme/Menu.css';

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
        if(this.props.data) {
            return this.props.data.map( el => {
                return (
                    <TableRow key={el.memberId}>
                        <TableCell>{el.englishName}</TableCell>
                        <TableCell>{el.mobileNumber}</TableCell>
                        <TableCell>{el.bloodGroup}</TableCell>
                        <TableCell>
                            {this.actionMenu()}
                        </TableCell>
                    </TableRow>
                );
            });
        }
    }

    render() {
        console.log('Table props', this.props);
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
    onDeleteClick: PropTypes.func,
    data: PropTypes.array
}