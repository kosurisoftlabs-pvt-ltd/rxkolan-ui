import React from 'react'
import '../Myservice/serviceStyle.css'
import './updateprice.css'
const UpdateList = () => {
    return (
        <div className='service-top'>
            <div class="row">
                    <div class="d_box table-responsive">
                        <form action="" method="POST">
                            <div class="modal-body update-body">
                                <div class="d-flex update-row-gap">
                                    <div class="up_pro_label ">
                                        <div class="form-group">
                                            Servicename 1
                                        </div>
                                    </div>
                                    <div class="up_pro_box">
                                        <div class="form-group">
                                            <input type="number" name="" class="form-control" placeholder="INR" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex update-row-gap">
                                    <div class="up_pro_label">
                                        <div class="form-group">
                                            Servicename 2
                                        </div>
                                    </div>
                                    <div class="up_pro_box">
                                        <div class="form-group">
                                            <input type="number" name="" class="form-control" placeholder="INR" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex update-row-gap">
                                    <div class="up_pro_label">
                                        <div class="form-group">
                                            Servicename 3
                                        </div>
                                    </div>
                                    <div class="up_pro_box">
                                        <div class="form-group">
                                            <input type="number" name="" class="form-control" placeholder="INR" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="submit" name="updateProfile" class="btn btn-success bg_self" value="Update Price" onClick="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default UpdateList
