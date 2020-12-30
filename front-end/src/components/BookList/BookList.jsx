import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardBook from '../CardBook/CardBook.jsx'

export default function BookList(props) {
   const { currentPage, dataSourceCount, searchBook } = props
   const [dataSource, setDataSource] = useState(null)

   useEffect(() => {
      fetchDataSource()
   }, [currentPage])

   useEffect(() => {
      fetchDataSource(searchBook)
   }, [searchBook])

   // Fetch new datasource from api
   const fetchDataSource = (searchString) => {
      let params = {
         take: 10,
         page: currentPage
      }

      if (searchString) {
         params.search = searchString
         params.page = 1
      }

      axios.get(`http://localhost:3000/books`, { params }).then(({ data }) => {
         if (data.items.length) {
            setDataSource(data.items)
         } else {
            setDataSource(null)
         }

         dataSourceCount(data.length)
      })
   }

   return (
      <>
         { dataSource && dataSource.map((book, index) => {
            return <CardBook book={book} key={index} />
         })}

         {
            !dataSource && <h1>No result</h1>
         }
      </>
   )
}
