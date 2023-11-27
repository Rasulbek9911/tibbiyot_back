import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// scss
import "./pagenation.scss";

function usePagenation(url, itemsPerPage) {
  const [hujjats, setHujjats] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    let mounted = false;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          setHujjats(data.results);
          console.log(hujjats);
        }
      });
      return () => (mounted = true);
  }, [url]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(hujjats.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(hujjats.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, hujjats]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % hujjats.length;
    setItemOffset(newOffset);
  };

  return {
    pagenation: (
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    ),
    currentItems: currentItems,
  };
}

export default usePagenation;
