import { useState } from 'react'
import './App.css'
import BookList from './components/BookList/BookList.jsx'
import Pagination from './components/Pagination/Pagination.jsx'
import Header from './components/Header/Header.jsx'

function App() {
   const [currentPage, setPage] = useState(1)
   const [totalBook, setTotalBook] = useState(0)
   const [searchBook, setSearchBook] = useState('')

   const onSearch = (value) => {
      setSearchBook(value)
   }

   return (
      <div className="app-container">
         <Header onSearch={onSearch} resetDatasource={() => setSearchBook('')} />
         <div className="flex-shrink-0 app-content">
            <div className="container-fluid mt-5">
               <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3 m-3">
                  <BookList
                     currentPage={currentPage}
                     dataSourceCount={(length) => setTotalBook(length)}
                     searchBook={searchBook}
                  />
               </div>
            </div>
         </div>

         <footer className="footer mt-auto py-3 bg-light">
            <div className="container-fluid mr-3 ml-3" style={{ display: 'flex' }}>
               <Pagination
                  onPageChanged={(e) => setPage(e)}
                  totalBook={totalBook}
                  searching={searchBook}
               />
            </div>
         </footer>
      </div>
   )
}

export default App
