import React from 'react'
import './serviceStyle.css'

const MyService = () => {
    return (

        // <div>
            <div className='service-top'>
                <div class="row">
                    <div class="d_box table-responsive">
                        <form action="" method="POST">
                            <div class="modal-body">
                                <div class="up_service d-flex">
                                    <div class="up_serv_item pr-1">
                                        <input type="text" name="serv1" placeholder="Searvice" required />
                                    </div>
                                    <span class="btn btn-success  servBoxBtn plusBoxBtn" title="Add" servBoxCount="2"><i class="fas fa-plus"></i></span>
                                </div>
                                <div class="plusServBox w-100 diBlock"></div>
                            </div>
                            <div class="modal-footer">
                                <input type="submit" name="" class="btn btn-success bg_self" value="Submit" onclick="return" />
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-3 col-sm-2 col-xs-12"></div>
            </div>

       
        // </div>
    )
}

export default MyService
