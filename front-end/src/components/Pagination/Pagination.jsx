import React, { useEffect, useState } from 'react'
import ReactPagination from 'react-js-pagination'

export default function Pagination({ onPageChanged, totalBook, searching }) {
   const [page, setPage] = useState(1)

   useEffect(() => {
      onPageChanged(page)
   }, [page, onPageChanged])

   const onPageChange = (page) => setPage(page)

   return (
      <>
         <ReactPagination
            activePage={page}
            itemsCountPerPage={10} // By default, allow only 20 books per page
            totalItemsCount={totalBook}
            pageRangeDisplayed={5}
            onChange={onPageChange}
            itemClass="page-item"
            linkClass="page-link"
         />
         {
            searching &&
               <p style={{ margin: '0 15px', lineHeight: '35px' }}>Showing result of '{searching}'</p>
         }
      </>
   )
}
