import React from 'react'
import { Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function TableRow(props) {
    return (
        <Tr>
            <Td className="bord center">{props.rank}</Td>
            <Td className="bord center"><i class="material-icons">games</i>{props.rating}</Td>
            <Td className="bord center">{props.username}</Td>
            <Td className="bord center"> {props.ongoing}</Td>
        </Tr>
    )
}

export default TableRow
