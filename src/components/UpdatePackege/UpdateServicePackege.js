import React from 'react'
import './packege.css'
const UpdateServicePackege = () => {
    return (
        <div classNameName='service-bottom'>
            <div className="row">
               
                    <div className="d_box table-responsive">
                        <form action="" method="POST">
                            <div className="modal-body packege-item">
                                <div className="upPackItem d-flex">
                                    <input type="checkbox" name="srv1" className="uP_checkbox cPointer" id="up1" />
                                    <label for="up1" className=" h6 cPointer">Searvice Name 1</label>
                                </div>
                                <div className="upPackItem d-flex">
                                    <input type="checkbox" name="srv2" className="uP_checkbox cPointer" id="up2" />
                                    <label for="up2" className="text-dark h6 cPointer">Searvice Name 2</label>
                                </div>
                                <div className="upPackItem d-flex">
                                    <input type="checkbox" name="srv3" className="uP_checkbox cPointer" id="up3" />
                                    <label for="up3" className="text-dark h6 cPointer">Searvice Name 3</label>
                                </div>
                                <div className="text-center pt-4 upPackCharge d-flex justify-content-center">
                                    <span className="text-dark cPointer h5">
                                        <input type="number" name="" value="500" className="text-center form-control" required />
                                    </span>
                                    <span className="text-dark cPointer h5 p-1">INR</span>
                                </div>

                            </div>
                            <div className="w-100 form-group text-center">
                                <input type="submit" name="" className="btn btn-success package-btn" value="Update Package" onClick="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default UpdateServicePackege
