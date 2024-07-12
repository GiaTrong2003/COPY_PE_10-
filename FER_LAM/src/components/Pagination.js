import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import Pagination from "react-bootstrap/Pagination";

function PaginationCode({filteredData}) {
  //
  const { dataList, currentPage, setCurrentPage, dataDefault } = useContext(DataContext);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(currentPage)

  const pageNumbers = [];
  for(let i = 1; i < filteredData.length / dataDefault + 1; i ++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Pagination className="justify-content-center">
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            onClick={() => paginate(number)}
            active={number === currentPage}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
}

export default PaginationCode;
