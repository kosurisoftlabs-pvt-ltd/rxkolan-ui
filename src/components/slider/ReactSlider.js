import React from 'react'

const ReactSlider = () => {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://portfolio.bdxpo.com/kolanstores/homepage/images/medicine.png" class="d-block w-50" alt="..."  style={{height:"50%"}} />
          </div>
          <div class="carousel-item">
            <img src="https://portfolio.bdxpo.com/kolanstores/homepage/images/medicine.png" class="d-block w-50" alt="..."  style={{height:"50%"}} />
          </div>
          <div class="carousel-item">
            <img src="https://portfolio.bdxpo.com/kolanstores/homepage/images/medicine.png" class="d-block w-50" alt="..."  style={{height:"50%"}} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default ReactSlider
