import { Table } from 'semantic-ui-react';
import styled from 'styled-components';

const TableRow = styled.div`
  overflow-x: auto;  /* Habilita el desplazamiento horizontal */
  overflow-y: hidden; /* Deshabilita el desplazamiento vertical */
  white-space: nowrap;
  padding: 1.5rem 0rem;
  & .content{

    width: 1000px;
  }
  `;

const Tables = ({ headers, data,children }) => {
  return (
    <TableRow>
      <div className='content'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {headers.map((header, index) => (
                <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
                ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((row, rowIndex) => (
              <Table.Row key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <Table.Cell key={cellIndex}>{cell}</Table.Cell>
                  ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </TableRow>
  );
};

export default Tables;