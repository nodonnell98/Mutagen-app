import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";

export default function WeaponTable(props) {
  const data = props.searchedWeapons;
  const pageSize = 5;

  const columns = [
    {
      display: "none",
      Header: "Name",
      accessor: "name",
      Cell: ({ cell }) => (
        <button
          className="tableBtn"
          value={cell.row.values.name}
          onClick={props.setWeapon}
        >
          {cell.row.values.name}
        </button>
      ),
    },
    {
      display: "none",
      Header: "Damage Type",
      accessor: "damage_type",
      sortType: "basic",
      Cell: ({ cell }) => (
        <button
          className="tableBtn"
          value={cell.row.values.name}
          onClick={props.setWeapon}
        >
          {cell.row.values.damage_type}
        </button>
      ),
    },
    {
      Header: "Type",
      accessor: "weapon_type",
      sortType: "basic",
      Cell: ({ cell }) => (
        <button
          className="tableBtn"
          value={cell.row.values.name}
          onClick={props.setWeapon}
        >
          {cell.row.values.weapon_type}
        </button>
      ),
    },
    {
      Header: "Range",
      accessor: "range",
      sortType: "basic",
      Cell: ({ cell }) => (
        <button
          className="tableBtn"
          value={cell.row.values.name}
          onClick={props.setWeapon}
        >
          {cell.row.values.range}
        </button>
      ),
    },
    {
      Header: "Ammo",
      accessor: "ammo",
      sortType: "basic",
      Cell: ({ cell }) => (
        <button
          className="tableBtn"
          value={cell.row.values.name}
          onClick={props.setWeapon}
        >
          {cell.row.values.ammo}
        </button>
      ),
    },
    {
      Header: "Prof. Bonus",
      accessor: "proficiency",
      sortType: "basic",
      Cell: ({ cell }) => (
        <button
          className="tableBtn"
          value={cell.row.values.name}
          onClick={props.setWeapon}
        >
          {cell.row.values.proficiency}
        </button>
      ),
    },
    {
      Header: "Dice Qty",
      accessor: "dice_qty",
      sortType: "basic",
      Cell: ({ cell }) => (
        <button
          className="tableBtn"
          value={cell.row.values.name}
          onClick={props.setWeapon}
        >
          {cell.row.values.dice_qty}
        </button>
      ),
    },
    {
      Header: "Dice Type",
      accessor: "dice_type",
      sortType: "basic",
      Cell: ({ cell }) => (
        <button
          className="tableBtn"
          value={cell.row.values.name}
          onClick={props.setWeapon}
        >
          {cell.row.values.dice_type}
        </button>
      ),
    },
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
  ];

  const paginationButtonStyle = {
    fontSize: '25px',
    marginLeft: '10px',
    backgroundColor: '#224e4c',
    border: '2px solid #66FCF1',
    borderRadius: '2px',
    width: '40px',
    height: '40px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }

  const Table = ({ columns, data }) => {
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
      state: { pageIndex },
    } = useTable(
      {
        columns,
        data,
        initialState: {
          pageIndex: 0,
          pageSize: 5,
        },
      },
      useSortBy,
      usePagination
    );

    return (
      <div className="flexBoxColumn" style={{ justifyContent: "space-evenly" }}>
        <table {...getTableProps()} className="flexGrow1">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
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
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          className="pagination flexGrow1 flexBoxRow"
          style={{ alignSelf: "flex-start", alignItems: "center" }}
        >
          <div className="flexBoxRow flexGrow1" style={{marginLeft: '2%'}}>
            <button
              style={paginationButtonStyle}
              className="input flexGrow1 card"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>{" "}
            <button
            style={paginationButtonStyle}
              className="input flexGrow1 card"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"<"}
            </button>{" "}
            <button
            style={paginationButtonStyle}
              className="input flexGrow1 card"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {">"}
            </button>{" "}
            <button
            style={paginationButtonStyle}
              className="input flexGrow1 card"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
          </div>
          <span style={{ flexGrow: "2" }}></span>
          <div
            className="flexBoxRow flexGrow2"
            style={{ justifyContent: "flex-end" }}
          >
            <span className="">
              Page{" "}
              <strong>
                {pageIndex + 1 + "  "}
                of {pageOptions.length}
              </strong>{" "}
            </span>
            <span>
              | Go to page:{" "}
              <input
                className="input flexGrow1"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{
                  width: "100px",
                  textAlign: "center",
                }}
              />
            </span>{" "}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="WeaponTable">
      <Table columns={columns} data={data} />
    </div>
  );
}
