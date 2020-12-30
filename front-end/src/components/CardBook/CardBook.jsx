import React from 'react'

export default function CardBook({ book }) {
   return (
      <div className="col book-col">
         <div className="card shadow-sm">
            <svg
               className="bd-placeholder-img card-img-top"
               width="100%"
               height="175"
               role="img"
               preserveAspectRatio="xMidYMid slice"
               focusable="false"
               margin="0 auto"
            >
               <title>{book.name}</title>
               <rect width="100%" height="100%" fill="#55595c" />
               <foreignObject
                  x="20%" y="3rem" width="8rem" height="5rem"
               >
                  <div
                     style={{ fontSize: '16px', textAlign: 'center', color: '#fff' }}
                  >
                     <p>{book.name}</p>
                  </div>
               </foreignObject>
            </svg>

            <div className="card-body">
               {book.series && <p className="card-text">Series : {book.series}</p>}
               <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{book.author}</small>
               </div>
            </div>
         </div>
      </div>
   )
}
