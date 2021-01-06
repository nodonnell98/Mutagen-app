import React from 'react';
import {useTable, useSortBy, usePagination} from 'react-table';

export default function WeaponTable(props) {

  const data = props.searchedWeapons
  const columns = [
    
    {
      display: 'none',
      Header: 'Name',
      accessor: 'name',
      Cell: ({ cell }) => (
        <button className="tableBtn" value={cell.row.values.name} onClick={props.setWeapon}>
          {cell.row.values.name}
        </button>
      )
    }, {
      Header: 'Damage Type',
      accessor: 'damage_type',
      sortType: 'basic'
    }, {
      Header: 'Range',
      accessor: 'range',
      sortType: 'basic'
    }, {
      Header: 'Ammo',
      accessor: 'ammo',
      sortType: 'basic'
    }, {
      Header: 'Quality',
      accessor: 'quality',
      sortType: 'basic'
    }, {
      Header: 'Noise',
      accessor: 'noise',
      sortType: 'basic'
    }
  ]

  const Table = ({columns, data}) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: {
        pageIndex,
        pageSize
      }
    } = useTable({
      columns,
      data,
      initialState: {
        pageIndex: 0
      }

    }, useSortBy, usePagination);

    return (
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup
                  .headers
                  .map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                      <span>{column.isSorted
                          ? (column.isSortedDesc
                            ? " 🔽"
                            : " 🔼")
                          : ""}</span>
                    </th>
                  ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row
                    .cells
                    .map(cell => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button
            className="input"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button
            className="input"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button className="input" onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            className="input"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}>
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1}
              of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              className="input"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
              const page = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(page);
            }}
              style={{
              width: "100px"
            }}/>
          </span>{" "}
          <select
            className="input"
            value={pageSize}
            onChange={e => {
            setPageSize(Number(e.target.value));
          }}>
            {[5, 10, 25, 50, 100].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="WeaponTable">
      <Table columns={columns} data={data}/>
    </div>

  );

}
