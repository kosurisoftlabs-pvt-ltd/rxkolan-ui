import React from 'react'

const Membership = () => {
    return (
        <div className='container-fluid content-box'>
            <div className='row row-space'>
                <div className='col-4'>
                    <div className='text-center'>
                        <span>Ambulance No</span>
                    </div>

                </div>
                <div className='col-4'>
                    <div className='text-center'>
                        <span>Membership Plan</span>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='text-center'>
                        <span>Amoount</span>
                    </div>
                </div>

            </div>
            <div className='row row-space'>
                <div className='col-4'>
                    <div className='text-center'>
                        <div class="form-group membership-input-field">
                            <input type="text" name="" value="123456" class="form-control" readonly />
                        </div>

                    </div>

                </div>
                <div className='col-4'>
                    <div className='text-center'>
                        <div class="form-group membership-input-field">
                            <select name="" id="" class="form-control" required>
                                <option value="">Select Plan</option>
                                <option value="1" selected>Plan A</option>
                                <option value="2">Plan B</option>
                            </select>
                        </div>

                    </div>

                </div>
                <div className='col-4'>
                    <div className='text-center'>
                        <div class="form-group membership-input-field">
                            <input type="text" name="" value="$300" class="form-control" readonly />
                        </div>

                    </div>
                </div>

            </div>

            {/* ------------------------------------------------------------------------- */}
            <div className='row row-space'>
                <div className='col-4'>
                    <div className='text-center'>
                        <div class="form-group membership-input-field">
                            <input type="text" name="" value="123456" class="form-control" readonly />
                        </div>

                    </div>

                </div>
                <div className='col-4 row-space'>
                    <div className='text-center'>
                        <div className="form-group membership-input-field">
                            <select name="" id="" class="form-control" required>
                                <option value="">Select Plan</option>
                                <option value="1" selected>Plan B</option>
                                <option value="2">Plan A</option>
                            </select>
                        </div>

                    </div>

                </div>
                <div className='col-4'>
                    <div className='text-center'>
                        <div class="form-group membership-input-field">
                            <input type="text" name="" value="$300" class="form-control" readonly />
                        </div>

                    </div>
                </div>

            </div>

            <div className='row row-space'>

                <div className='col-8'>

                </div>
                <div className='col-4 summery'>
                    <div className='calculate-total'>
                        <div className=''>
                            Sub Total :
                        </div>
                        <div className=''>
                            $ 500
                        </div>
                    </div>
                    <div className='calculate-total'>
                        <div className="">
                            Gross Total :
                        </div>
                        <div className="">
                            $ 500
                        </div>
                    </div>
                    <div className='calculate-total'>
                        <div className="">
                            Total Amount :
                        </div>
                        <div className="">
                            $ 500
                        </div>
                    </div>
                  
                    <div className='pay-now row-space-pay'>
                        <div className="pay-btn">
                            <input type="submit" name="submit" value="Pay Now" className="btn btn-success payNowBtn bg_self" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Membership
