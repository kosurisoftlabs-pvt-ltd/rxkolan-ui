import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/headers/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchTable from '../../components/Search/SearchTable'

import './search.css'

const Search = () => {
  return (
    <div className='search-page'>
        <Header/>
        <Navbar/>
        <div className='banner-img'>
            <img src="https://portfolio.bdxpo.com/kolanstores/homepage/images/flash-sale.jpg" alt="banner-img"/>

        </div>
        <SearchTable/>
        <Footer/>
      
    </div>
  )
}

export default Search
