import React from 'react';
import {useTable, useSortBy, usePagination} from 'react-table';

export default function WeaponTable(props) {

  const data = props.searchedWeapons
  const pageSize = props.pageSize

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
      display: 'none',
      Header: 'Damage Type',
      accessor: 'damage_type',
      sortType: 'basic',
      Cell: ({ cell }) => (
        <button className="tableBtn" value={cell.row.values.name} onClick={props.setWeapon}>
          {cell.row.values.damage_type}
        </button>
      )
    }, {
      Header: 'Type',
      accessor: 'weapon_type',
      sortType: 'basic',
      Cell: ({ cell }) => (
        <button className="tableBtn" value={cell.row.values.name} onClick={props.setWeapon}>
          {cell.row.values.weapon_type}
        </button>
      )
    },
    {
      Header: 'Range',
      accessor: 'range',
      sortType: 'basic',
      Cell: ({ cell }) => (
        <button className="tableBtn" value={cell.row.values.name} onClick={props.setWeapon}>
          {cell.row.values.range}
        </button>
      )
    },
    {
      Header: 'Ammo',
      accessor: 'ammo',
      sortType: 'basic',
      Cell: ({ cell }) => (
        <button className="tableBtn" value={cell.row.values.name} onClick={props.setWeapon}>
          {cell.row.values.ammo}
        </button>
      )
    },
    {
      Header: 'Prof. Bonus',
      accessor: 'proficiency',
      sortType: 'basic',
      Cell: ({ cell }) => (
        <button className="tableBtn" value={cell.row.values.name} onClick={props.setWeapon}>
          {cell.row.values.proficiency}
        </button>
      )
    },
    {
      Header: 'Dice Qty',
      accessor: 'dice_qty',
      sortType: 'basic',
      Cell: ({ cell }) => (
        <button className="tableBtn" value={cell.row.values.name} onClick={props.setWeapon}>
          {cell.row.values.dice_qty}
        </button>
      )
    },
    {
      Header: 'Dice Type',
      accessor: 'dice_type',
      sortType: 'basic',
      Cell: ({ cell }) => (
        <button className="tableBtn" value={cell.row.values.name} onClick={props.setWeapon}>
          {cell.row.values.dice_type}
        </button>
      )
    }
    // {
    //   display: 'none',
    //   Header: 'Actions',
    //   accessor: 'delete',
    //   Cell: ({ cell }) => (
    //     <button className="tableBtn" value={cell.row.values.delete} onClick={props.removeWeapon}>
    //         Delete
    //     </button>
    //   )
    // }

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
        pageIndex
      }
    } = useTable({
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: `${pageSize}`
      }

    }, useSortBy, usePagination);

    return (
      <div className="flexBoxColumn" style={{ justifyContent: 'space-evenly' }}>
        <table {...getTableProps()} className="flexGrow1">
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
        <div className="pagination flexGrow1" style={{ alignSelf: 'flex-end' }}>
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
