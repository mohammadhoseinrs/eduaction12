import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'


export default function Pagination({productperpage,prodata,setcurrentpage}) {

const pageCount=Math.ceil(prodata.length/productperpage)

function pagechange({selected}){
    setcurrentpage(selected)
}

  return (
   <>
   <ReactPaginate

   previousLabel={'قبل'}
   nextLabel={'بعد'}
   pageCount={pageCount}
   onPageChange={pagechange}
   containerClassName={'paginationcontainer'}
   previousLinkClassName={'paginationprevious'}
   nextLinkClassName={'paginationnext'}
   activeLinkClassName={'paginationactive'}
   
   />
   </>
  )
}
