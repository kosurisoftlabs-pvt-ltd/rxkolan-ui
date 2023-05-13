import React from 'react'
import './slider.css'
import Medicine from '../../images/medicine.png'
const Slider = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
             
                <div className="carousel-inner container-fluid">
                    
                <div className="carousel-item active" >
                        <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='carousel_img'>
                            <img src={Medicine} className='d-block' alt="..." />
                            </div>
                            </div>
                            <div className='col-md-8'>
                            <div className="carousel-caption d-none d-md-block col-md-8 col-lg-8 col-sm-12">
                            <h1 >Welcome To Our</h1>
                            <span>Online Medicine</span>
                            <p >Get medicine, baby items, medical devices, Ambualnce Services and etc from your nearest local medical shop at super discounts..</p>
                        </div>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                    <div className="carousel-item " >
                        <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='carousel_img'>
                            <img src={Medicine} className='d-block' alt="..." />
                            </div>
                            </div>
                            <div className='col-md-8'>
                            <div className="carousel-caption d-none d-md-block col-md-8 col-lg-8 col-sm-12" >
                            <h1 >Welcome To Our</h1>
                            <span>Online Medicine</span>
                            <p >Get medicine, baby items, medical devices, Ambualnce Services and etc from your nearest local medical shop at super discounts..</p>
                        </div>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                    
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{ color: "#00000" }}>
                    <span
                        
                        style={{ color: "black" }} ><i class="fa-solid fa-arrow-left"></i></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span
                      
                        style={{ color: "black"}}><i class="fa-solid fa-arrow-right"></i></span>
                </button>
            </div>
        </>
    )
}

export default Slider
