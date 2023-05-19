import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/headers/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchTable from '../../components/Search/SearchTable'
import { useSelector } from 'react-redux';


import './search.css'

const Search = () => {
  let {  medicineList } = useSelector((state) => state.medicineSearch);

  return (
    <div className='search-page'>
        <Header/>
        <Navbar/>
        <div className='banner-img'>
            <img src="https://portfolio.bdxpo.com/kolanstores/homepage/images/flash-sale.jpg" alt="banner-img"/>

        </div>
        <SearchTable data={medicineList}/>
        <Footer/>

    </div>
  )
}

export default Search
