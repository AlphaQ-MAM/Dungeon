import React from 'react'
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import TableRow from './TableRow'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function LeaderBoardTable() {
    return (
        <div>
            <Table className="white-text mytable-marg  orange darken-3">
                <Thead>
                    <Tr>
                        <Th className="bord center" style={{ fontWeight: 'bold' }}>RANK</Th>
                        <Th className="bord center" style={{ fontWeight: 'bold' }}>RATING</Th>
                        <Th className="bord center" style={{ fontWeight: 'bold' }}>USERNAME</Th>
                        <Th className="bord center " style={{ fontWeight: 'bold' }}>ONGOING</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    <TableRow rank="1" rating="253" username="knight" ongoing="33 games won" />
                    <TableRow rank="2" rating="250" username="DungeonMaster" ongoing="25 games won" />
                    <TableRow rank="3" rating="248" username="Jett" ongoing="23 games won" />
                    <TableRow rank="4" rating="245" username="Loki" ongoing="22 games won" />
                    <TableRow rank="5" rating="243" username="Paul" ongoing="21 games won" />
                    <TableRow rank="6" rating="230" username="voramanan" ongoing="20 games won" />
                    <TableRow rank="7" rating="230" username="mahak" ongoing="19 games won" />
                    <TableRow rank="8" rating="228" username="anish" ongoing="17 games won" />
                    <TableRow rank="9" rating="225" username="sayk" ongoing="16 games won" />

                </Tbody>
            </Table>

        </div>
    )
}

export default LeaderBoardTable