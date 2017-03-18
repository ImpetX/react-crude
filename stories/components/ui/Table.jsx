import React, {Component} from 'react';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';

import {data} from './Tablemodel';

import Styles from '../../../src/modules/members/components/css/List.css';

export default class ListTable extends Component {
    getTableRow() {
        return data.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.contact}</TableCell>
                    <TableCell>{item.bloodGroup}</TableCell>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <Table selectable={false}>
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Blood Group</TableCell>
                </TableHead>
                {this.getTableRow()}
            </Table>
        );
    }
}